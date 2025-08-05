'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const slidesContent = [
  // Slide 1: Título
  <>
    <Image
      src="/agilinm/logo_agilinm_branco.png"
      alt="Logo AgilInM"
      width={400}
      height={100}
      style={{ marginBottom: '40px' }}
      priority
    />
    <h1>Agile Innovation Management</h1>
    <p className={styles['subtitle']}>Plataforma para Gestão do Conhecimento Orientada à Inovação</p>
    <p>Sistema FIERGS - Departamento Regional</p>
  </>,
  // Slide 2: O que é
  <>
    <h2>O que é o AgilInM?</h2>
    <p style={{ margin: '0.5rem 0', textAlign: 'left', maxWidth: '1300px' }}>
      Plataforma de Gestão Ágil da Inovação, que busca integrar dados de projetos e consultorias 
      junto à uma ferramenta de gerenciamento de equipes e atividades, através da cultura do 
      autoplanejamento. 
    </p>
    <p style={{ textAlign: 'left', maxWidth: '1300px' }}>
    Com uma visão de gestão integrada à macroentregas, tarefas e seus requisitos, é possível 
    traçar os caminhos críticos das demandas e gerar informações relevantes à nível gerencial 
    e operacional. Através de análise preditiva de projetos, é possível traçar 
    caminhos otimizados para atender demandas futuras e formar times que agreguem valor às entregas.
    </p>
    <div className={styles['features-grid']}>
      <div className={styles['feature-card']}>
        <h4>🎯 Gestão do Conhecimento</h4>
        <p>Plataforma orientada para gestão da inovação com foco em organização e estruturação do conhecimento.</p>
      </div>
      <div className={styles['feature-card']}>
        <h4>📊 Plataforma Modularizada</h4>
        <p>Gerenciamento integrado de projetos, consultorias e serviços em uma base unificada.</p>
      </div>
      <div className={styles['feature-card']}>
        <h4>💡 Autoplanejamento (SPA)</h4>
        <p>Módulo SPA (Selfie Planning Assessment) para gestão de tarefas atrelado à cultura do autoplanejamento.</p>
      </div>
    </div>
  </>,
  // Slide 3: Funcionalidades Principais
  <>
    <h2>Funcionalidades Principais</h2>
    <div className={styles['side-by-side-slide']}>
      <div className={styles.imageColumn}>
        <div className={styles.imageWrapper}>
          <Image
            src="/agilinm/controle_atuacao.png"
            alt="Controle de Atuação"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/agilinm/spa.png"
            alt="SPA - Selfie Planning Assessment"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.textSide}>
        <ul>
          <li><span className={styles.highlight}>Organização semanal de tarefas</span> integrada aos demais módulos</li>
          <li><span className={styles.highlight}>Relatórios, gráficos e dashboards</span> sob demanda</li>
          <li><span className={styles.highlight}>Base unificada</span> contemplando todas as unidades dos institutos de tecnologia</li>
          <li><span className={styles.highlight}>Gestão de skills</span> dos colaboradores com classificação por gestores</li>
          <li><span className={styles.highlight}>Visibilidade centralizada</span> para o nível de gestão</li>
        </ul>
      </div>
    </div>
  </>,
  // Slide 3: Funcionalidades Principais
  <>
    <h2>Funcionalidades Principais</h2>
    <div className={styles['side-by-side-slide']}>
      <div className={styles.imageColumn}>
        <div className={styles.imageWrapper}>
          <Image
            src="/agilinm/controle_atuacao.png"
            alt="Controle de Atuação"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/agilinm/spa.png"
            alt="SPA - Selfie Planning Assessment"
            width={600}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.textSide}>
        <ul>
          <li><span className={styles.highlight}>Análise de alertas e inconsistências</span> através de Agentes de Inteligência Artificial</li>
          <li><span className={styles.highlight}>Gestão de recursos e espaços</span> (laboratórios) para reservas em atividades</li>
          <li><span className={styles.highlight}>Gestão de tenancy</span> (Unidade) para configurações peculiares de cada instituto</li>
          <li><span className={styles.highlight}>Gestão de vínculos de trabalho</span> para histórico de cargos e custos de projetos</li>
          <li><span className={styles.highlight}>Controle de atuação</span> para administrar times de projetos, consultorias e serviços</li>
          <li><span className={styles.highlight}>Ferramentas de controle de qualidade (SGQ)</span> com controle de tarefas, performance e inconsistências</li>
        </ul>
      </div>
    </div>
  </>,
  // Slide 4: Problema vs Solução
  <>
    <h2>Problema vs Solução</h2>
    <div className={styles['problem-solution']}>
      <div className={styles.problem}>
        <h4>❌ Problema Identificado</h4>
        <p><strong>Cultura organizacional deficiente</strong></p>
        <ul>
          <li>Falta de autoplanejamento</li>
          <li>Baixa orientação à inovação</li>
          <li>Produtividade inconsistente</li>
          <li>Problemas de conformidade</li>
          <li>Visibilidade limitada para gestão</li>
        </ul>
      </div>
      <div className={styles.solution}>
        <h4>✅ Nossa Solução</h4>
        <p><strong>Cultura do autoplanejamento</strong></p>
        <ul>
          <li>Orientação à inovação</li>
          <li>Aumento da produtividade</li>
          <li>Garantia de conformidade</li>
          <li>Visibilidade centralizada</li>
          <li>Gestão inteligente de recursos</li>
        </ul>
      </div>
    </div>
  </>,
  // Slide 5: Benefícios para Gestão
  <>
    <h2>Benefícios para a Gestão</h2>
    <div className={styles['features-grid']}>
      <div className={styles['feature-card']}>
        <h4>📈 Avaliações de Performance</h4>
        <p>Monitoramento contínuo de conformidades e performance dos colaboradores.</p>
      </div>
      <div className={styles['feature-card']}>
        <h4>🎯 Gestão de Projetos</h4>
        <p>Visão de alto nível para projetos e consultorias em andamento.</p>
      </div>
      <div className={styles['feature-card']}>
        <h4>👥 Formação de Times</h4>
        <p>Decisões baseadas em dados para formação de equipes e capacitação.</p>
      </div>
    </div>
  </>,
  // Slide 6: Gestão de Skills
  <>
    <h2>Gestão Inteligente de Skills</h2>
    <ul>
      <li><span className={styles.highlight}>Classificação de competências</span> pelos gestores</li>
      <li><span className={styles.highlight}>Auxílio na tomada de decisão</span> para formação de times</li>
      <li><span className={styles.highlight}>Identificação de necessidades</span> de capacitação interna</li>
      <li><span className={styles.highlight}>Análise estratégica</span> para novas contratações</li>
      <li><span className={styles.highlight}>Mapeamento de talentos</span> organizacionais</li>
    </ul>
  </>,
  // Slide 7: Módulo SPA
  <>
    <h2>Módulo SPA</h2>
    <h3>Selfie Planning Assessment</h3>
    <div className={styles['features-grid']}>
      <div className={styles['feature-card']}>
        <h4>📱 Aplicativo Mobile</h4>
        <p>Acesso móvel para autoavaliação e planejamento pessoal.</p>
      </div>
      <div className={styles['feature-card']}>
        <h4>🎯 Autoplanejamento</h4>
        <p>Ferramenta para desenvolvimento da cultura de autogestão.</p>
      </div>
      <div className={styles['feature-card']}>
        <h4>📊 Assessment Contínuo</h4>
        <p>Avaliação constante do progresso individual e organizacional.</p>
      </div>
    </div>
  </>,
  // Slide 8: Conclusão
  <>
    <h2>AgilInM</h2>
    <p className={styles.subtitle}>Transformando a cultura organizacional através da inovação</p>
    <ul>
      <li><span className={styles.highlight}>Plataforma unificada</span> para gestão completa</li>
      <li><span className={styles.highlight}>Cultura de autoplanejamento</span> e inovação</li>
      <li><span className={styles.highlight}>Visibilidade total</span> para tomada de decisões</li>
      <li><span className={styles.highlight}>Gestão inteligente</span> de recursos humanos</li>
      <li><span className={styles.highlight}>Conformidade e produtividade</span> garantidas</li>
    </ul>
    <p style={{ marginTop: '40px', fontSize: '4.6rem', color: '#00d4ff' }}>
      <strong>Obrigado!</strong><br />
    </p>
  </>
];

const AgilinmProdutoPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesContent.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, previousSlide]);

  return (
    <div className={styles['presentation-container']}>
      <div className={styles['slide-counter']}>
        <span>{currentSlide + 1}</span> / <span>{totalSlides}</span>
      </div>

      {slidesContent.map((content, index) => (
        <div key={index} className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}>
          {content}
        </div>
      ))}

      <div className={styles.navigation}>
        <button className={styles['nav-btn']} onClick={previousSlide}>← Anterior</button>
        <button className={styles['nav-btn']} onClick={nextSlide}>Próximo →</button>
      </div>
    </div>
  );
};

export default AgilinmProdutoPage; 