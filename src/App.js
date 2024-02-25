import logo from './logo.svg';
import './App.css';
import img1 from './images/IMG_4212.PNG';
import img2 from './images/IMG_4213.PNG';
import img3 from './images/IMG_4214.PNG';
import Policy from './Policy';
import { useEffect, useState } from 'react';
import Terms from './Terms';

function App() {

  const [rota,setRota] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      if(window.location.hash === "#policy") {
        setRota('policy');
      } else if(window.location.hash === "#terms") {
        setRota('terms');
      } 
      else {
        setRota('')
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    // cleanup
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); 

  if(rota == "policy") 
  {
    return <div className="container py-5">
        <Policy />
      </div>
  }
  else if(rota == "terms"){
    return <div className="container py-5">
        <Terms />
      </div>
  }

  return (
    <div className="container py-5">
      <header className="text-center mb-5" style={{ paddingTop: 50, paddingBottom: 30 }}>
        <h1 className="mb-3" style={{ fontSize: 62 }}>QuickZap</h1>
        <h2 className="mb-3" style={{ fontSize: 32, marginTop: -20 }}>for WhatsApp</h2>
        <p style={{fontSize: 22, marginTop: 25}}>Send and Receive WhatsApp messages without saving contacts to your phone.</p>
      </header>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Send message</h5>
              <p className="card-text">You can send a text message without adding a new contact to your phone.</p>
              {/* <a href="#" className="btn btn-primary">Learn More</a> */}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Receive message</h5>
              <p className="card-text">Show your QRCode or share the link that will open your WhatsApp profile with a default text.</p>
              {/* <a href="#" className="btn btn-primary">Discover</a> */}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Templates</h5>
              <p className="card-text">Create message templates for easy access to default messages.</p>
              {/* <a href="#" className="btn btn-primary">Get Started</a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="download-cta my-5 p-4 bg-light border rounded custom-border">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Download QuickZap App</h2>
            <p style={{marginBottom: 0}}>Quickly send and receive WhatsApp messages!</p>
          </div>
          <div className="col-md-6 text-center" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <a href="https://apps.apple.com/us/app/quickzap-for-whatsapp/id6478258235"
              style={{ display: 'flex', maxWidth: 160, alignItems: 'center' }}
              className="btn btn-primary mx-2">
              <svg height={24} width={24} fill='#fff' viewBox="0 0 820 950">
                <path d="M404.345 229.846c52.467 0 98.494-20.488 138.08-61.465s59.38-88.626 59.38-142.947c0-5.966-.472-14.444-1.414-25.434-6.912.942-12.096 1.727-15.552 2.355-48.383 6.908-90.954 30.615-127.713 71.12-36.758 40.506-55.137 83.838-55.137 129.996 0 5.337.785 14.13 2.356 26.375zM592.379 950c37.387 0 78.701-25.59 123.943-76.772S796.122 761.915 820 692.836c-88.912-45.844-133.368-111.626-133.368-197.348 0-71.591 35.973-132.82 107.92-183.688-49.954-62.486-115.931-93.729-197.931-93.729-34.56 0-66.134 5.181-94.724 15.543l-17.908 6.594-24.035 9.42c-15.709 5.966-30.004 8.95-42.885 8.95-10.054 0-23.25-3.455-39.586-10.363l-18.38-7.536-17.436-7.065c-25.449-10.676-52.782-16.014-82-16.014-78.23 0-141.065 26.376-188.506 79.128C23.72 349.479 0 419.03 0 505.379c0 121.517 38.015 233.772 114.046 336.763C166.828 914.047 215.054 950 258.724 950c18.537 0 36.916-3.611 55.138-10.833l23.092-9.42 18.38-6.594c25.762-9.106 49.482-13.659 71.16-13.659 22.935 0 49.326 5.81 79.173 17.427l14.609 5.652C550.75 944.191 574.786 950 592.379 950z" />
              </svg>
              <span style={{marginLeft: 8, fontWeight: 'bold'}}>
                Apple Store
              </span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=br.com.rafaelbravo.quickzap"
              style={{ display: 'flex', maxWidth: 160, alignItems: 'center' }}
              className="btn btn-primary mx-2">
              <svg height={24} width={24} fill='#fff' viewBox="42.544 -.671 467.96 553.72">
                <path d="m76.774 179.141c-9.529 0-17.614 3.323-24.26 9.969s-9.97 14.621-9.97 23.929v142.914c0 9.541 3.323 17.619 9.97 24.266 6.646 6.646 14.731 9.97 24.26 9.97 9.522 0 17.558-3.323 24.101-9.97 6.53-6.646 9.804-14.725 9.804-24.266v-142.914c0-9.309-3.323-17.283-9.97-23.929s-14.627-9.969-23.935-9.969zm275.198-128.294 23.598-43.532c1.549-2.882.998-5.092-1.658-6.646-2.883-1.34-5.098-.661-6.646 1.989l-23.928 43.88c-21.055-9.309-43.324-13.972-66.807-13.972-23.488 0-45.759 4.664-66.806 13.972l-23.929-43.88c-1.555-2.65-3.77-3.323-6.646-1.989-2.662 1.561-3.213 3.764-1.658 6.646l23.599 43.532c-23.929 12.203-42.987 29.198-57.167 51.022-14.18 21.836-21.273 45.698-21.273 71.628h307.426c0-25.924-7.094-49.787-21.273-71.628-14.181-21.824-33.129-38.819-56.832-51.022zm-136.433 63.318c-2.552 2.558-5.6 3.831-9.143 3.831-3.55 0-6.536-1.273-8.972-3.831-2.436-2.546-3.654-5.582-3.654-9.137 0-3.543 1.218-6.585 3.654-9.137 2.436-2.546 5.429-3.819 8.972-3.819s6.591 1.273 9.143 3.819c2.546 2.558 3.825 5.594 3.825 9.137-.007 3.549-1.285 6.591-3.825 9.137zm140.086 0c-2.441 2.558-5.434 3.831-8.971 3.831-3.551 0-6.598-1.273-9.145-3.831-2.551-2.546-3.824-5.582-3.824-9.137 0-3.543 1.273-6.585 3.824-9.137 2.547-2.546 5.594-3.819 9.145-3.819 3.543 0 6.529 1.273 8.971 3.819 2.438 2.558 3.654 5.594 3.654 9.137 0 3.549-1.217 6.591-3.654 9.137zm-231.654 292.639c0 10.202 3.543 18.838 10.63 25.925 7.093 7.087 15.729 10.63 25.924 10.63h24.596l.337 75.454c0 9.528 3.323 17.619 9.969 24.266s14.627 9.97 23.929 9.97c9.523 0 17.613-3.323 24.26-9.97s9.97-14.737 9.97-24.266v-75.447h45.864v75.447c0 9.528 3.322 17.619 9.969 24.266s14.73 9.97 24.26 9.97c9.523 0 17.613-3.323 24.26-9.97s9.969-14.737 9.969-24.266v-75.447h24.928c9.969 0 18.494-3.544 25.594-10.631 7.086-7.087 10.631-15.723 10.631-25.924v-221.361h-305.09zm352.304-227.663c-9.309 0-17.283 3.274-23.93 9.804-6.646 6.542-9.969 14.578-9.969 24.094v142.914c0 9.541 3.322 17.619 9.969 24.266s14.627 9.97 23.93 9.97c9.523 0 17.613-3.323 24.26-9.97s9.969-14.725 9.969-24.266v-142.914c0-9.517-3.322-17.552-9.969-24.094-6.647-6.53-14.737-9.804-24.26-9.804z" />
              </svg>
              <span style={{marginLeft: 8, fontWeight: 'bold'}}>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </div>


      <footer className="text-center mt-5">
        <p>© 2024 Rafael Z. B. Bravo. All rights reserved.</p>
        <p style={{fontSize: 9}}>"WhatsApp" is a registered trademark of Meta. QuickZap is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Meta Platforms, Inc., or any of its subsidiaries or affiliates, including WhatsApp Inc. The official WhatsApp website can be found at https://www.whatsapp.com. The name "WhatsApp" as well as related names, marks, emblems, and images are registered trademarks of Meta.</p>
      </footer>
    </div>
  );
}

export default App;
