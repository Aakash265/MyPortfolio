export const textVariant = (delay) => {
    return {
      hidden: {
        x: -50,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };

export const paraVariant = (delay) => {
    return {
      hidden: {
        x: 50,
        opacity: 0,
      },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          delay: delay,
        },
      },
    };
  };