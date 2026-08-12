export const thunderReveal = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: 'brightness(1) blur(5px)',
    boxShadow: '0px 0px 0px transparent',
    background: 'transparent'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: ['brightness(10) blur(0px)', 'brightness(1) blur(0px)', 'brightness(5) blur(0px)', 'brightness(1) blur(0px)'],
    boxShadow: ['0px 0px 100px #fff', '0px 0px 0px transparent', '0px 0px 50px #87cefa', '0px 0px 0px transparent'],
    background: ['#fff', 'transparent', '#fff', 'transparent'],
    transition: { 
      duration: 0.6,
      times: [0, 0.1, 0.2, 1],
      ease: 'easeOut'
    }
  }
};

export const electricTextReveal = {
  hidden: { 
    opacity: 0, 
    textShadow: '0 0 0px transparent',
    filter: 'brightness(0) blur(5px)'
  },
  visible: { 
    opacity: 1, 
    textShadow: ['0 0 50px #fff', '0 0 0px transparent', '0 0 20px #87cefa', '0 0 0px transparent'],
    filter: ['brightness(5) blur(2px)', 'brightness(1) blur(0px)', 'brightness(2) blur(1px)', 'brightness(1) blur(0px)'],
    transition: { 
      duration: 0.5,
      times: [0, 0.2, 0.4, 1],
      ease: 'easeOut'
    }
  }
};

// Extremely fast white flash on the background for section changes
export const sectionFlash = {
  hidden: { backgroundColor: 'transparent' },
  visible: {
    backgroundColor: ['#fff', 'transparent'],
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};
