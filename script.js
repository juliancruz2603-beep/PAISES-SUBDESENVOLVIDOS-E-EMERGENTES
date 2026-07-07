document.getElementById('tabs-container').addEventListener('click', (event) => {
  const clickedTab = event.target.closest('.tab');
  
  if (!clickedTab) return;

  const targetId = clickedTab.dataset.target;

  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
  
  clickedTab.classList.add('active');
  document.getElementById(targetId).classList.add('active');
});
