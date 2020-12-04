export const fadeInSlow = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fadeInWhileRotating = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: 15,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
