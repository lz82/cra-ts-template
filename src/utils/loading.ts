const Loading = document.querySelector('#loading-mask') as HTMLElement;

/**
 * 整页Loading
 */
export const showLoading = () => {
  Loading.style.display = 'flex';
};

/**
 * 隐藏整页Loading
 */
export const hideLoading = () => {
  Loading.style.display = 'none';
};
