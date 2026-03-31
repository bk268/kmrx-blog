---
title: 友情链接
date: 2026-03-31 11:17:00
type: "link"
comments: true
---

<div class="flink">

<div class="friend-card">
  <a href="https://github.com" target="_blank">
    <img src="https://github.com/favicon.ico" alt="GitHub">
    <div class="friend-info">
      <h3>GitHub</h3>
      <p>全球最大的代码托管平台</p>
    </div>
  </a>
</div>

<div class="friend-card">
  <a href="https://hexo.io" target="_blank">
    <img src="https://hexo.io/favicon.ico" alt="Hexo">
    <div class="friend-info">
      <h3>Hexo</h3>
      <p>快速、简洁且高效的博客框架</p>
    </div>
  </a>
</div>

</div>

<style>
.flink {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.friend-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.friend-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.friend-card a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.friend-card img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}

.friend-info h3 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.friend-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>