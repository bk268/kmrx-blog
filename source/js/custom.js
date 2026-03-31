// ===================================
// 页面加载动画
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  // 添加加载完成类
  document.body.classList.add('loaded');
  
  // 控制台欢迎信息
  console.log('%c 🎉 欢迎来到我的博客！ ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 8px;');
  console.log('%c 联系邮箱: your-email@example.com ', 'color: #667eea; font-size: 14px;');
});

// ===================================
// 滚动效果
// ===================================
let lastScrollTop = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // 向下滚动隐藏导航栏，向上滚动显示
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});

// ===================================
// 图片懒加载优化
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});

// ===================================
// 复制代码添加版权信息
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('.highlight');
  
  codeBlocks.forEach(block => {
    block.addEventListener('copy', function(e) {
      const selection = document.getSelection().toString();
      const copyright = '\n\n/* 转载自: ' + window.location.href + ' */';
      e.clipboardData.setData('text/plain', selection + copyright);
      e.preventDefault();
    });
  });
});