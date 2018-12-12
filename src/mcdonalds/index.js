import mcdonalds from './mcdonalds.pug';
import './mcdonalds.scss';

export const render = () => {
  setTimeout(start);
  return mcdonalds;
};

function start() {
  const wrapper = document.querySelector('.mcdonalds-wrapper');
  const couponPage = wrapper.querySelector('.coupon-page');
  const coupons = wrapper.querySelector('.coupons');
  const header = wrapper.querySelector('header');
  const hamburgerIcon = header.querySelector('.hamburger img');
  const nextHamburgerIcon = header.querySelector('.next-hamburger');
  const title = header.querySelector('.title-text');
  const nextTitle = header.querySelector('.next-title-text');
  const how = header.querySelector('.how-text');
  const nextHow = header.querySelector('.next-how-text');
  const hamburger = header.querySelector('.hamburger');
  const exp = wrapper.querySelector('.exp');
  coupons.addEventListener('click', handleExchange);
  function handleExchange(e) {
    e.preventDefault();
    const target = e.target.closest('.status');
    if (target && Array.from(target.classList).includes('status')) {
      openCouponPage();
    } else {
      return;
    }
  }
  exp.textContent = setExp();
  function setExp() {
    const date = new Date();
    return `期限：${date.getFullYear()} 年 ${date.getMonth() +
      1} 月 ${date.getDate() + 3} 日`;
  }
  function openCouponPage() {
    hamburgerIcon.style.opacity = '0';
    nextHamburgerIcon.style.opacity = '100';
    title.style.transform = `translateX(-200%)`;
    title.style.opacity = '0';
    nextTitle.style.transform = `translateX(0%)`;
    nextTitle.style.opacity = '100';
    how.style.opacity = '0';
    nextHow.style.opacity = '100';
    couponPage.style.transform = 'translateX(0%)';
    hamburger.addEventListener('click', closeCouponPage);
  }
  function closeCouponPage() {
    couponPage.style.transform = 'translateX(100%)';
    hamburgerIcon.style.opacity = '100';
    nextHamburgerIcon.style.opacity = '0';
    title.style.transform = `translateX(0%)`;
    title.style.opacity = '100';
    nextTitle.style.transform = `translateX(200%)`;
    nextTitle.style.opacity = '0';
    how.style.opacity = '100';
    nextHow.style.opacity = '0';
    hamburger.removeEventListener('click', closeCouponPage);
  }
}
