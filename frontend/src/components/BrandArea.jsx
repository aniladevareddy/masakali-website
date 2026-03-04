import React from 'react';
import './BrandArea.css';
import b1 from '../assets/img/brand/1.webp';
import b2 from '../assets/img/brand/2.webp';
import b3 from '../assets/img/brand/3.webp';
import b4 from '../assets/img/brand/4.webp';

const locations = [
  { img: b1, map: 'https://maps.app.goo.gl/MTivtQCeVMtYRRjh9', addr: '5507 Hazeldean Rd, Stittsville, Ottawa', phone: '(613) 878-3939' },
  { img: b2, map: 'https://maps.app.goo.gl/4VNkhgpZ1fuyWW8t8', addr: '700 March Rd, Kanata, Ottawa', phone: '(613) 595-0777' },
  { img: b3, map: 'https://maps.app.goo.gl/Av3b9KvZ1Q8Z45cn7', addr: '97 Clarence St, Byward Mkt, Ottawa', phone: '(613) 789-6777' },
  { img: b4, map: 'https://maps.app.goo.gl/zJqrDQD95KzHE32V6', addr: '1111 Wellington St, Ottawa', phone: '(613) 792-9777' }
];

export default function BrandArea() {
  return (
    <div className="brand-area overflow-hidden default-padding bg-cover text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-5 mt-md-0">
            <div className="brand-style-one-carousel">
              <div className="brand-carousel-track">
                {locations.map((loc, i) => (
                  <div key={i} className="brand-slide">
                    <div className="brand-thumb">
                      <img src={loc.img} alt={`Location ${i+1}`} />
                    </div>
                    <p className="brand-meta">
                      <a href={loc.map} target="_blank" rel="noopener noreferrer" className="brand-link">
                        <i className="icon-location"></i> {loc.addr}
                      </a>
                      <br />
                      <a className="brand-phone" href={`tel:${loc.phone.replace(/[^\\d+]/g, '')}`}>{loc.phone}</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
