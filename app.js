// FATEC ADS - Plataforma de Estudos (Tema Clean / Ledger)
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTabs();
  initProgress();
  renderMatematicaSection();
  renderDisciplinasSection();
  renderRedacoesHistoricas();
  renderPropostasTreino();
  renderProvasDownloads();
  initRedacaoStudio();
  initSimulador();
  initSimuladoTimer();
  refreshIcons();
});

// THEME MANAGEMENT (Dark / Light)
const THEME_KEY = 'fatec_theme_v1';

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(savedTheme);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {}

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    const isLight = theme === 'light';
    const iconName = isLight ? 'moon' : 'sun';
    const labelText = isLight ? 'Escuro' : 'Claro';
    toggleBtn.innerHTML = `<i data-lucide="${iconName}" id="themeIcon"></i><span class="theme-toggle-label" id="themeLabel">${labelText}</span>`;
  }
  refreshIcons();
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 1. TABS SYSTEM
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(target);
      if (activePanel) {
        activePanel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        refreshIcons();
      }
    });
  });
}

// 2. CHECKLIST & PROGRESS TRACKER (LOCALSTORAGE)
const STORAGE_KEY = 'fatec_estudos_checklist_v1';

function getCheckedTopics() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
}

function saveCheckedTopic(topicId, isChecked) {
  const current = getCheckedTopics();
  current[topicId] = isChecked;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  updateProgressUI();
}

function updateProgressUI() {
  const checked = getCheckedTopics();
  const allCheckboxes = document.querySelectorAll('.topic-checkbox');
  const total = allCheckboxes.length;
  let done = 0;

  allCheckboxes.forEach(cb => {
    const id = cb.dataset.topicId;
    if (checked[id]) {
      cb.checked = true;
      cb.closest('.topic-item').classList.add('completed');
      done++;
    } else {
      cb.checked = false;
      cb.closest('.topic-item').classList.remove('completed');
    }
  });

  const percentage = total > 0 ? Math.round((done / total) * 100) : 0;
  const fillEl = document.getElementById('overallProgressBar');
  const textEl = document.getElementById('overallProgressText');
  
  if (fillEl) fillEl.style.width = `${percentage}%`;
  if (textEl) textEl.textContent = `${done} de ${total} tópicos dominados (${percentage}%)`;
}

function initProgress() {
  setTimeout(updateProgressUI, 50);
}

// 3. SESSÃO DE MATEMÁTICA & LÓGICA (PESO 2)
function renderMatematicaSection() {
  const container = document.getElementById('matematicaContentArea');
  if (!container) return;

  const mat = FATEC_DATA.materias.find(m => m.id === 'matematica');
  const log = FATEC_DATA.materias.find(m => m.id === 'raciocinio-logico');

  let html = `
    <div class="card highlight" style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
            <span class="badge p2">Peso 2 • ADS Noturno</span>
            <span class="badge outline">36% da Prova Objetiva</span>
          </div>
          <h3 style="font-size: 1.1rem; font-weight: 600; color: var(--foreground); margin-bottom: 0.35rem;">
            Matemática & Raciocínio Lógico
          </h3>
          <p style="color: var(--muted-foreground); max-width: 800px; font-size: 0.85rem;">
            Para o curso de Análise e Desenvolvimento de Sistemas (Noturno), estas duas disciplinas representam o maior diferencial de pontuação. A Fatec prioriza geometria aplicada, estatística (médias e porcentagem) e lógica proposicional com contas exatas sem calculadora.
          </p>
        </div>
        <div style="text-align: right;">
          <div style="font-family: var(--font-mono); font-size: 1.5rem; font-weight: 600; color: var(--foreground);">13 Qs</div>
          <div style="font-size: 0.75rem; color: var(--muted-foreground);">8 Mat + 5 Lógica</div>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <!-- Card Matemática -->
      <div class="card">
        <div class="card-title">
          <span>Matemática (8 questões)</span>
          <span class="badge p2">Peso 2 • 22%</span>
        </div>
        <p style="font-size: 0.82rem; color: var(--muted-foreground); margin-bottom: 1rem;">
          ${mat.descricao}
        </p>

        <div class="topic-group">
          <div class="topic-group-title recorrente">
            <i data-lucide="trending-up" class="icon-sm"></i> Mais Recorrente (5+ provas)
          </div>
          ${mat.mais_recorrente.map((t, idx) => `
            <label class="topic-item">
              <input type="checkbox" class="topic-checkbox" data-topic-id="mat_rec_${idx}" onchange="saveCheckedTopic('mat_rec_${idx}', this.checked)">
              <div class="topic-info">
                <div class="topic-name">
                  ${t.topico}
                  <span class="topic-badge-freq">${t.recorrencia}</span>
                </div>
                <div class="topic-desc">${t.detalhes}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="topic-group">
          <div class="topic-group-title secundario">
            <i data-lucide="list" class="icon-sm"></i> Também Aparece (2 a 4 provas)
          </div>
          ${mat.tambem_aparece.map((t, idx) => `
            <label class="topic-item">
              <input type="checkbox" class="topic-checkbox" data-topic-id="mat_sec_${idx}" onchange="saveCheckedTopic('mat_sec_${idx}', this.checked)">
              <div class="topic-info">
                <div class="topic-name">
                  ${t.topico}
                  ${t.recorrencia ? `<span class="topic-badge-freq">${t.recorrencia}</span>` : ''}
                </div>
                <div class="topic-desc">${t.detalhes}</div>
              </div>
            </label>
          `).join('')}
        </div>
      </div>

      <!-- Card Raciocínio Lógico -->
      <div class="card">
        <div class="card-title">
          <span>Raciocínio Lógico (5 questões)</span>
          <span class="badge p2">Peso 2 • 14%</span>
        </div>
        <p style="font-size: 0.82rem; color: var(--muted-foreground); margin-bottom: 1rem;">
          ${log.descricao}
        </p>

        <div class="topic-group">
          <div class="topic-group-title recorrente">
            <i data-lucide="trending-up" class="icon-sm"></i> Mais Recorrente (5+ provas)
          </div>
          ${log.mais_recorrente.map((t, idx) => `
            <label class="topic-item">
              <input type="checkbox" class="topic-checkbox" data-topic-id="log_rec_${idx}" onchange="saveCheckedTopic('log_rec_${idx}', this.checked)">
              <div class="topic-info">
                <div class="topic-name">
                  ${t.topico}
                  <span class="topic-badge-freq">${t.recorrencia}</span>
                </div>
                <div class="topic-desc">${t.detalhes}</div>
              </div>
            </label>
          `).join('')}
        </div>

        <div class="topic-group">
          <div class="topic-group-title secundario">
            <i data-lucide="list" class="icon-sm"></i> Também Aparece (2 a 4 provas)
          </div>
          ${log.tambem_aparece.map((t, idx) => `
            <label class="topic-item">
              <input type="checkbox" class="topic-checkbox" data-topic-id="log_sec_${idx}" onchange="saveCheckedTopic('log_sec_${idx}', this.checked)">
              <div class="topic-info">
                <div class="topic-name">${t.topico}</div>
                <div class="topic-desc">${t.detalhes}</div>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
  refreshIcons();
}

// 4. TODAS AS DISCIPLINAS (PESO 1)
function renderDisciplinasSection() {
  const container = document.getElementById('disciplinasGrid');
  if (!container) return;

  const otherDisciplinas = FATEC_DATA.materias.filter(m => m.id !== 'matematica' && m.id !== 'raciocinio-logico');

  let html = otherDisciplinas.map(m => `
    <div class="card">
      <div class="card-title">
        <span>${m.nome}</span>
        <span class="badge outline">${m.questoes_2026} Qs • Peso ${m.peso_ads} (${m.fatia_nota})</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--muted-foreground); margin-bottom: 1rem;">
        ${m.descricao}
      </p>

      <div class="topic-group">
        <div class="topic-group-title recorrente">
          <i data-lucide="trending-up" class="icon-sm"></i> Mais Recorrente (5+ provas)
        </div>
        ${m.mais_recorrente.map((t, idx) => `
          <label class="topic-item">
            <input type="checkbox" class="topic-checkbox" data-topic-id="${m.id}_rec_${idx}" onchange="saveCheckedTopic('${m.id}_rec_${idx}', this.checked)">
            <div class="topic-info">
              <div class="topic-name">
                ${t.topico}
                ${t.recorrencia ? `<span class="topic-badge-freq">${t.recorrencia}</span>` : ''}
              </div>
              <div class="topic-desc">${t.detalhes}</div>
            </div>
          </label>
        `).join('')}
      </div>

      <div class="topic-group">
        <div class="topic-group-title secundario">
          <i data-lucide="list" class="icon-sm"></i> Também Aparece (2 a 4 provas)
        </div>
        ${m.tambem_aparece.map((t, idx) => `
          <label class="topic-item">
            <input type="checkbox" class="topic-checkbox" data-topic-id="${m.id}_sec_${idx}" onchange="saveCheckedTopic('${m.id}_sec_${idx}', this.checked)">
            <div class="topic-info">
              <div class="topic-name">${t.topico}</div>
              <div class="topic-desc">${t.detalhes}</div>
            </div>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
  refreshIcons();
}

// 5. REDAÇÕES HISTÓRICAS (2020 a 2026)
function renderRedacoesHistoricas() {
  const container = document.getElementById('redacoesHistoricasGrid');
  if (!container) return;

  const items = FATEC_DATA.redacoes_historicas;

  let html = items.map(r => `
    <div class="redacao-hist-card">
      <div class="redacao-meta">
        <span class="badge">${r.edicao}</span>
        <span class="badge outline">${r.area}</span>
      </div>
      <div class="redacao-tema">"${r.tema}"</div>
      <div class="redacao-eixo">
        <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--muted-foreground); margin-bottom: 0.2rem;">Tema condutor do caderno:</div>
        <div>${r.eixo_prova}</div>
      </div>
      <div style="font-size: 0.76rem; color: var(--muted-foreground); display: flex; justify-content: space-between;">
        <span>Estrutura: ${r.formato}</span>
        <span>${r.semestre} de ${r.ano}</span>
      </div>
      <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
        <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="openRedacaoHistoricaModal('${r.id}')">
          <i data-lucide="book-open" class="icon-sm"></i> Textos de Apoio (${r.textos ? r.textos.length : 0})
        </button>
        <button class="btn btn-primary btn-sm" onclick="startPraticaRedacaoHistorica('${r.id}')">
          <i data-lucide="pen-tool" class="icon-sm"></i> Praticar
        </button>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
  refreshIcons();
}

function openRedacaoHistoricaModal(id) {
  const redacao = FATEC_DATA.redacoes_historicas.find(r => r.id === id);
  if (!redacao) return;

  const modal = document.getElementById('propostaModal');
  const modalContent = document.getElementById('modalDynamicContent');

  const semNum = id.split('-')[1];
  const anoNum = id.split('-')[0];
  const provaPdf = FATEC_DATA.provas.find(p => p.ano == anoNum && p.semestre == semNum);
  const pageNum = redacao.pagina_redacao || (provaPdf ? provaPdf.pagina_redacao : 22);
  const pdfUrlWithPage = provaPdf ? `${provaPdf.arquivo_prova}#page=${pageNum}` : '#';

  let textosHtml = '';
  if (redacao.textos && redacao.textos.length > 0) {
    textosHtml = redacao.textos.map(t => {
      const isImgLink = t.conteudo.includes('http') && t.conteudo.length < 220;
      const paragraphs = t.conteudo.split('\n\n');
      const parasHtml = paragraphs.map(p => `<p style="margin-bottom: 0.6rem; line-height: 1.6; color: var(--foreground);">${p}</p>`).join('');

      return `
        <div class="texto-apoio-box">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
            <h4>Texto ${t.numero}</h4>
            ${isImgLink ? `<span class="badge outline" style="font-size: 0.7rem;">Infográfico / Imagem</span>` : ''}
          </div>
          ${parasHtml}
          ${isImgLink ? `
            <div style="margin-top: 0.6rem; padding: 0.6rem 0.75rem; background: var(--card); border-radius: var(--radius-sm); border: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
              <span style="font-size: 0.78rem; color: var(--muted-foreground);">Este texto consiste em um infográfico / charge impresso no caderno.</span>
              <a href="${pdfUrlWithPage}" target="_blank" class="btn btn-secondary btn-sm" style="font-size: 0.75rem;">
                <i data-lucide="external-link" class="icon-sm"></i> Ver na Pág. ${pageNum} do PDF
              </a>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  } else {
    textosHtml = `<p style="color: var(--muted-foreground);">Textos de apoio disponíveis diretamente no caderno da prova.</p>`;
  }

  modalContent.innerHTML = `
    <div style="margin-bottom: 0.8rem;">
      <div style="display: flex; gap: 0.4rem; align-items: center; margin-bottom: 0.3rem;">
        <span class="badge">${redacao.edicao}</span>
        <span class="badge outline">${redacao.area}</span>
      </div>
      <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--foreground);">Redação Oficial (${redacao.semestre} de ${redacao.ano})</h3>
    </div>

    <div class="modal-tema-box">
      <h4>Tema Oficial da Prova:</h4>
      <p>"${redacao.tema}"</p>
    </div>

    <div style="background: var(--secondary); border: 1px solid var(--border); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--muted-foreground);">
      <strong style="color: var(--foreground);">Tema condutor do caderno:</strong> ${redacao.eixo_prova}
    </div>

    <div style="display: flex; flex-direction: column; gap: 0.85rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.4rem;">
        <h4 style="font-size: 0.82rem; text-transform: uppercase; color: var(--muted-foreground); letter-spacing: 0.04em;">Coletânea Oficial:</h4>
        ${provaPdf ? `<a href="${pdfUrlWithPage}" target="_blank" class="btn btn-secondary btn-sm" style="font-size: 0.76rem;"><i data-lucide="file-text" class="icon-sm"></i> Abrir na Página ${pageNum} do PDF</a>` : ''}
      </div>
      ${textosHtml}
    </div>

    <div style="background: var(--secondary); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.78rem; color: var(--muted-foreground); border: 1px solid var(--border);">
      Instruções oficiais: texto dissertativo-argumentativo ou narrativo, título obrigatório, até 30 linhas, norma culta, sem cópia literal.
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 0.6rem; margin-top: 0.8rem;">
      <button class="btn btn-secondary" onclick="closePropostaModal()">Fechar</button>
      <button class="btn btn-primary" onclick="closePropostaModal(); startPraticaRedacaoHistorica('${redacao.id}')">
        <i data-lucide="pen-tool" class="icon-sm"></i> Praticar Esta Redação
      </button>
    </div>
  `;

  modal.classList.add('active');
  refreshIcons();
}

function startPraticaRedacaoHistorica(id) {
  const tabBtn = document.querySelector('[data-tab="redacaoStudioTab"]');
  if (tabBtn) tabBtn.click();

  const redacao = FATEC_DATA.redacoes_historicas.find(r => r.id === id);
  if (redacao) {
    const banner = document.getElementById('redacaoCurrentThemeBanner');
    if (banner) {
      banner.innerHTML = `
        <div style="background: var(--card); border: 1px solid var(--border-strong); border-radius: var(--radius-md); padding: 0.85rem; margin-bottom: 1.1rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.3rem;">
            <span class="badge">${redacao.edicao}</span>
            <button class="btn btn-secondary btn-sm" onclick="openRedacaoHistoricaModal('${redacao.id}')">
              <i data-lucide="book-open" class="icon-sm"></i> Ver Textos de Apoio
            </button>
          </div>
          <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--foreground);">"${redacao.tema}"</h4>
        </div>
      `;
      refreshIcons();
    }
  }
}

// 6. BANCO DE 30 PROPOSTAS DE TREINO
let currentPropostasCategory = 'all';
let currentPropostasSearch = '';

function renderPropostasTreino() {
  const container = document.getElementById('propostasGrid');
  if (!container) return;

  let filtered = FATEC_DATA.propostas_treino;

  if (currentPropostasCategory !== 'all') {
    filtered = filtered.filter(p => p.categoria === currentPropostasCategory);
  }

  if (currentPropostasSearch.trim() !== '') {
    const q = currentPropostasSearch.toLowerCase();
    filtered = filtered.filter(p => 
      p.titulo.toLowerCase().includes(q) || 
      p.tema.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; color: var(--muted-foreground);">Nenhuma proposta encontrada para os filtros selecionados.</div>`;
    return;
  }

  let html = filtered.map(p => `
    <div class="proposta-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
          <span class="proposta-badge">${p.categoria}</span>
          <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--muted-foreground);">#${p.id}</span>
        </div>
        <div class="proposta-title">${p.id}. ${p.titulo}</div>
        <div class="proposta-tema">"${p.tema}"</div>
      </div>
      <div style="display: flex; gap: 0.45rem; margin-top: 0.8rem;">
        <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="openPropostaModal(${p.id})">
          <i data-lucide="book-open" class="icon-sm"></i> Textos
        </button>
        <button class="btn btn-primary btn-sm" onclick="startPraticaRedacao(${p.id})">
          <i data-lucide="pen-tool" class="icon-sm"></i> Praticar
        </button>
      </div>
    </div>
  `).join('');

  container.innerHTML = html;
  refreshIcons();
}

function filterPropostas(cat) {
  currentPropostasCategory = cat;
  renderPropostasTreino();
}

function searchPropostas(query) {
  currentPropostasSearch = query;
  renderPropostasTreino();
}

// 7. MODAL DE PROPOSTA
function openPropostaModal(id) {
  const proposta = FATEC_DATA.propostas_treino.find(p => p.id === id);
  if (!proposta) return;

  const modal = document.getElementById('propostaModal');
  const modalContent = document.getElementById('modalDynamicContent');

  modalContent.innerHTML = `
    <div style="margin-bottom: 0.8rem;">
      <span class="proposta-badge">${proposta.categoria}</span>
      <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--foreground); margin-top: 0.3rem;">${proposta.id}. ${proposta.titulo}</h3>
    </div>

    <div class="modal-tema-box">
      <h4>Tema Oficial Proposto:</h4>
      <p>"${proposta.tema}"</p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 0.85rem;">
      <h4 style="font-size: 0.82rem; text-transform: uppercase; color: var(--muted-foreground); letter-spacing: 0.04em;">Textos de Apoio:</h4>
      ${proposta.textos.map(t => `
        <div class="texto-apoio-box">
          <h4>Texto ${t.numero}</h4>
          <p>${t.conteudo}</p>
        </div>
      `).join('')}
    </div>

    <div style="background: var(--secondary); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.78rem; color: var(--muted-foreground); border: 1px solid var(--border);">
      Instruções oficiais: texto dissertativo-argumentativo ou narrativo, título obrigatório, até 30 linhas, norma culta.
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 0.6rem; margin-top: 0.8rem;">
      <button class="btn btn-secondary" onclick="closePropostaModal()">Fechar</button>
      <button class="btn btn-primary" onclick="closePropostaModal(); startPraticaRedacao(${proposta.id})">
        <i data-lucide="pen-tool" class="icon-sm"></i> Praticar Esta Redação
      </button>
    </div>
  `;

  modal.classList.add('active');
  refreshIcons();
}

function closePropostaModal() {
  const modal = document.getElementById('propostaModal');
  if (modal) modal.classList.remove('active');
}

// 8. PROVAS E GABARITOS (DOWNLOADS)
function renderProvasDownloads() {
  const container = document.getElementById('provasDownloadsGrid');
  if (!container) return;

  const items = FATEC_DATA.provas;

  let html = items.map(p => {
    return `
      <div class="prova-card">
        <div class="prova-top">
          <div class="prova-ano-badge">
            ${p.ano}
            <span class="prova-semestre-tag">${p.semestre_label}</span>
          </div>
          <span class="badge outline">${p.questoes} Questões</span>
        </div>

        <div class="prova-detalhe">
          <div class="prova-tema-guia">
            <div style="font-size: 0.7rem; text-transform: uppercase; color: var(--muted-foreground); margin-bottom: 0.15rem;">Eixo Temático:</div>
            <div>${p.tema_central}</div>
          </div>
          <div style="font-size: 0.8rem;">
            <strong style="color: var(--foreground);">Redação:</strong> "${p.tema_redacao}"
          </div>
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--muted-foreground);">
            Arquivo: prova-${p.semestre}-${p.ano}.pdf
          </div>
        </div>

        <div class="prova-actions">
          <a href="${p.arquivo_prova}" target="_blank" class="btn btn-primary btn-sm">
            <i data-lucide="file-text" class="icon-sm"></i> Prova (${p.tamanho_prova})
          </a>
          <a href="${p.arquivo_gabarito}" target="_blank" class="btn btn-secondary btn-sm">
            <i data-lucide="check" class="icon-sm"></i> Gabarito (${p.tamanho_gabarito})
          </a>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
  refreshIcons();
}

// 9. STUDIO DE REDAÇÃO
let redacaoTimerInterval = null;
let redacaoSecondsLeft = 60 * 60;

function initRedacaoStudio() {
  const textarea = document.getElementById('redacaoTextarea');
  const lineCountEl = document.getElementById('redacaoLineCount');
  const wordCountEl = document.getElementById('redacaoWordCount');

  if (textarea) {
    textarea.addEventListener('input', () => {
      const text = textarea.value;
      const lines = text.split('\n').length;
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

      if (lineCountEl) {
        lineCountEl.textContent = `${lines} / 30 linhas`;
        if (lines > 30) {
          lineCountEl.style.color = '#f87171';
          lineCountEl.textContent += ' (limite atingido)';
        } else {
          lineCountEl.style.color = 'var(--muted-foreground)';
        }
      }

      if (wordCountEl) {
        wordCountEl.textContent = `${words} palavras`;
      }
    });
  }
}

function startPraticaRedacao(id) {
  const tabBtn = document.querySelector('[data-tab="redacaoStudioTab"]');
  if (tabBtn) tabBtn.click();

  const proposta = FATEC_DATA.propostas_treino.find(p => p.id === id);
  if (proposta) {
    const banner = document.getElementById('redacaoCurrentThemeBanner');
    if (banner) {
      banner.innerHTML = `
        <div style="background: var(--card); border: 1px solid var(--border-strong); border-radius: var(--radius-md); padding: 0.85rem; margin-bottom: 1.1rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.3rem;">
            <span class="proposta-badge">Proposta #${proposta.id} • ${proposta.categoria}</span>
            <button class="btn btn-secondary btn-sm" onclick="openPropostaModal(${proposta.id})">
              <i data-lucide="book-open" class="icon-sm"></i> Ver Textos de Apoio
            </button>
          </div>
          <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--foreground);">"${proposta.tema}"</h4>
        </div>
      `;
      refreshIcons();
    }
  }
}

function toggleRedacaoTimer() {
  const btn = document.getElementById('redacaoTimerBtn');
  if (redacaoTimerInterval) {
    clearInterval(redacaoTimerInterval);
    redacaoTimerInterval = null;
    btn.innerHTML = `<i data-lucide="play" class="icon-sm"></i> Retomar`;
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-primary');
  } else {
    redacaoTimerInterval = setInterval(() => {
      if (redacaoSecondsLeft <= 0) {
        clearInterval(redacaoTimerInterval);
        redacaoTimerInterval = null;
        alert('Tempo de redação esgotado (60 minutos).');
        return;
      }
      redacaoSecondsLeft--;
      updateRedacaoTimerDisplay();
    }, 1000);
    btn.innerHTML = `<i data-lucide="pause" class="icon-sm"></i> Pausar`;
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-danger');
  }
  refreshIcons();
}

function resetRedacaoTimer() {
  if (redacaoTimerInterval) {
    clearInterval(redacaoTimerInterval);
    redacaoTimerInterval = null;
  }
  redacaoSecondsLeft = 60 * 60;
  updateRedacaoTimerDisplay();
  const btn = document.getElementById('redacaoTimerBtn');
  if (btn) {
    btn.innerHTML = `<i data-lucide="play" class="icon-sm"></i> Iniciar`;
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-primary');
  }
  refreshIcons();
}

function updateRedacaoTimerDisplay() {
  const display = document.getElementById('redacaoTimerDisplay');
  if (!display) return;
  const m = Math.floor(redacaoSecondsLeft / 60);
  const s = redacaoSecondsLeft % 60;
  display.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// 10. SIMULADOR DE PONTUAÇÃO
function initSimulador() {
  const form = document.getElementById('simuladorForm');
  if (!form) return;

  form.addEventListener('input', calculateScore);
}

function calculateScore() {
  const mat = parseInt(document.getElementById('simMat').value) || 0;
  const log = parseInt(document.getElementById('simLog').value) || 0;
  const mul = parseInt(document.getElementById('simMul').value) || 0;
  const por = parseInt(document.getElementById('simPor').value) || 0;
  const ing = parseInt(document.getElementById('simIng').value) || 0;
  const hum = parseInt(document.getElementById('simHum').value) || 0;

  const totalAcertos = mat + log + mul + por + ing + hum;
  const pontosPonderados = (mat * 2) + (log * 2) + mul + por + ing + hum;
  const maxPontos = 73;
  const aproveitamento = ((pontosPonderados / maxPontos) * 100).toFixed(1);

  document.getElementById('resAcertosTotal').textContent = `${totalAcertos} / 60`;
  document.getElementById('resPontosPonderados').textContent = `${pontosPonderados} / ${maxPontos}`;
  document.getElementById('resAproveitamento').textContent = `${aproveitamento}%`;

  const feedbackEl = document.getElementById('resFeedback');
  if (totalAcertos === 0) {
    feedbackEl.textContent = 'Preencha os acertos das disciplinas para calcular a nota ponderada.';
  } else if (aproveitamento >= 75) {
    feedbackEl.textContent = 'Alta probabilidade de aprovação no período noturno.';
  } else if (aproveitamento >= 55) {
    feedbackEl.textContent = 'Zona competitiva para convocação.';
  } else {
    feedbackEl.textContent = 'Abaixo da pontuação média de corte de ADS.';
  }
}

// 11. CRONÔMETRO DE SIMULADO (5 HORAS)
let simuladoTimerInterval = null;
let simuladoSecondsLeft = 5 * 60 * 60;

function initSimuladoTimer() {
  updateSimuladoTimerDisplay();
}

function toggleSimuladoTimer() {
  const btn = document.getElementById('simuladoTimerBtn');
  if (simuladoTimerInterval) {
    clearInterval(simuladoTimerInterval);
    simuladoTimerInterval = null;
    btn.innerHTML = `<i data-lucide="play" class="icon-sm"></i> Continuar`;
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-primary');
  } else {
    simuladoTimerInterval = setInterval(() => {
      if (simuladoSecondsLeft <= 0) {
        clearInterval(simuladoTimerInterval);
        simuladoTimerInterval = null;
        alert('Tempo total de simulado esgotado (5 horas).');
        return;
      }
      simuladoSecondsLeft--;
      updateSimuladoTimerDisplay();
    }, 1000);
    btn.innerHTML = `<i data-lucide="pause" class="icon-sm"></i> Pausar`;
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-danger');
  }
  refreshIcons();
}

function resetSimuladoTimer() {
  if (simuladoTimerInterval) {
    clearInterval(simuladoTimerInterval);
    simuladoTimerInterval = null;
  }
  simuladoSecondsLeft = 5 * 60 * 60;
  updateSimuladoTimerDisplay();
  const btn = document.getElementById('simuladoTimerBtn');
  if (btn) {
    btn.innerHTML = `<i data-lucide="play" class="icon-sm"></i> Iniciar`;
    btn.classList.remove('btn-danger');
    btn.classList.add('btn-primary');
  }
  refreshIcons();
}

function updateSimuladoTimerDisplay() {
  const display = document.getElementById('simuladoTimerDisplay');
  if (!display) return;
  const h = Math.floor(simuladoSecondsLeft / 3600);
  const m = Math.floor((simuladoSecondsLeft % 3600) / 60);
  const s = simuladoSecondsLeft % 60;
  display.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
