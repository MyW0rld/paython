const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const web = document.querySelector('#web')
const host = document.querySelector('#host')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const webContent = document.querySelector('#web-content')
const hostContent = document.querySelector('#host-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '700px',
    height: '400px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '700px',
    height: '400px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

host.addEventListener('click', () => {
  const hostBox = new WinBox({
    title: 'Web-Page Hosting',
    width: '700px',
    height: '400px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: hostContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

web.addEventListener('click', () => {
  const webBox = new WinBox({
    title: 'Webs I Made',
    url: 'https://myw0rld.github.io/abandoned-world/',
    width: '700px',
    height: '400px',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: webContent,
  })
})
