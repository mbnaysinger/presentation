'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

const slidesContent = [
  // Slide 1: Título
  <>
    <div className={styles.logo}>AgilInM</div>
    <h1>Agile Innovation Management</h1>
    <p className={styles.subtitle}>Plataforma para Gestão do Conhecimento Orientada à Inovação</p>
    <p>Sistema FIERGS - Departamento Regional</p>
  </>,
  // Slide 2: O que é
  <>
    <h2>O que é o AgilInM?</h2>
    <div className={styles['features-grid']}>
      <div className={styles['feature-card']}>
        <h4>🎯 Gestão do Conhecimento</h4>
        <p>Plataforma orientada para gestão da inovação com foco em organização e estruturação do conhecimento empresarial.</p>
      </div>
      <div className={styles['feature-card']}>
        <h4>📊 Plataforma Modularizada</h4>
        <p>Gerenciamento integrado de projetos, consultorias e serviços em uma base unificada.</p>
      </div>
      <div className={styles['feature-card']}>
        <h4>📱 Aplicativo Mobile</h4>
        <p>Módulo SPA (Selfie Planning Assessment) disponível em dispositivos móveis.</p>
      </div>
    </div>
  </>,
  // Slide 3: Funcionalidades Principais
  <>
    <h2>Funcionalidades Principais</h2>
    <ul>
      <li><span className={styles.highlight}>Organização semanal de tarefas</span> integrada aos demais módulos</li>
      <li><span className={styles.highlight}>Relatórios, gráficos e dashboards</span> sob demanda</li>
      <li><span className={styles.highlight}>Base unificada</span> contemplando todas as unidades dos institutos de tecnologia</li>
      <li><span className={styles.highlight}>Gestão de skills</span> dos colaboradores com classificação por gestores</li>
      <li><span className={styles.highlight}>Visibilidade centralizada</span> para o nível de gestão</li>
    </ul>
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
      <li>✅ <span className={styles.highlight}>Plataforma unificada</span> para gestão completa</li>
      <li>✅ <span className={styles.highlight}>Cultura de autoplanejamento</span> e inovação</li>
      <li>✅ <span className={styles.highlight}>Visibilidade total</span> para tomada de decisões</li>
      <li>✅ <span className={styles.highlight}>Gestão inteligente</span> de recursos humanos</li>
      <li>✅ <span className={styles.highlight}>Conformidade e produtividade</span> garantidas</li>
    </ul>
    <p style={{ marginTop: '40px', fontSize: '1.6rem', color: '#00d4ff' }}>
      <strong>Agile Innovation Management</strong><br />
      O futuro da gestão está aqui.
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