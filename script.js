const menuToggle=document.getElementById('menuToggle');
const navLinks=document.getElementById('navLinks');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('light');document.getElementById('themeToggle').textContent=document.body.classList.contains('light')?'☾':'☼';});
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('progress').style.width=(max>0?(window.scrollY/max*100):0)+'%';});

document.querySelectorAll('#projectFilters .filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('#projectFilters .filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const filter=btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card=>{const cats=card.dataset.category.split(' ');card.hidden=!(filter==='all'||cats.includes(filter));});
}));

const certificates = [{"file": "sap-abap-cloud.pdf", "title": "SAP Certified – Back-End Developer, ABAP Cloud", "org": "SAP", "type": "Certification"}, {"file": "nptel-natural-language-processing.pdf", "title": "Natural Language Processing", "org": "NPTEL · IIT Kharagpur", "type": "Course"}, {"file": "nptel-cloud-computing.pdf", "title": "Cloud Computing (Elite)", "org": "NPTEL · IIT Kharagpur", "type": "Course"}, {"file": "eduskills-mern-full-stack.pdf", "title": "MERN Full Stack Development with Project", "org": "AICTE · EduSkills", "type": "Internship"}, {"file": "eduskills-java-full-stack.pdf", "title": "Java Full Stack Developer", "org": "AICTE · EduSkills", "type": "Internship"}, {"file": "google-android-developer.pdf", "title": "Android Developer Virtual Internship", "org": "Google for Developers · EduSkills", "type": "Internship"}, {"file": "eduskills-blockchain-technology.pdf", "title": "Blockchain Technology Virtual Internship", "org": "AICTE · EduSkills", "type": "Internship"}, {"file": "skyskill-data-analytics.pdf", "title": "Data Analytics Summer Internship", "org": "SkySkill Academy · IIT Bhubaneswar Research & Entrepreneurship Park", "type": "Internship"}, {"file": "1stop-frontend-web-development.pdf", "title": "Web Development – Front End", "org": "1Stop", "type": "Internship"}, {"file": "adobe-design-fundamentals-ai.pdf", "title": "Design Fundamentals with AI", "org": "Adobe", "type": "Course"}, {"file": "python-using-ai-workshop.pdf", "title": "Python Using AI Workshop", "org": "AI for Techies", "type": "Workshop"}, {"file": "cybersecurity-club-workshop.pdf", "title": "5-Day Cybersecurity Club Workshop", "org": "GIET University · Cyber3ra", "type": "Workshop"}, {"file": "innotech-blockchain-workshop.jpg", "title": "3-Day Blockchain Workshop", "org": "Innotech Club", "type": "Workshop", "image": true}, {"file": "ml-workshop-code-communicators.jpg", "title": "3-Day ML Workshop", "org": "Code Communicators", "type": "Workshop", "image": true}, {"file": "techsprint-2026.jpg", "title": "TechSprint 2026 – Participation", "org": "Google Developer Group · GIET University", "type": "Achievement", "image": true}, {"file": "hashgraph-developer-course.jpg", "title": "Hashgraph Developer Course", "org": "The Hashgraph Association · Built on Hedera", "type": "Course", "image": true}];
const grid=document.getElementById('certificateGrid');
let certType='all';
function renderCertificates(){
  const q=document.getElementById('certSearch').value.trim().toLowerCase();
  const shown=certificates.filter(c=>(certType==='all'||c.type===certType)&&(`${c.title} ${c.org} ${c.type}`).toLowerCase().includes(q));
  grid.innerHTML='';
  if(!shown.length){grid.innerHTML='<p class="empty-state">No certificates match your search.</p>';return;}
  shown.forEach(c=>{
    const card=document.createElement('article');card.className='certificate-card';
    const type=document.createElement('span');type.className='cert-type';type.textContent=c.type;
    const title=document.createElement('h3');title.textContent=c.title;
    const org=document.createElement('p');org.textContent=c.org;
    const link=document.createElement('a');link.href='assets/certificates/'+encodeURIComponent(c.file);link.target='_blank';link.rel='noreferrer';link.textContent=c.image?'View certificate image ↗':'Open certificate PDF ↗';
    card.append(type,title,org,link);grid.appendChild(card);
  });
}
document.getElementById('certSearch').addEventListener('input',renderCertificates);
document.querySelectorAll('#certFilters .filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('#certFilters .filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');certType=btn.dataset.filter;renderCertificates();
}));
renderCertificates();
