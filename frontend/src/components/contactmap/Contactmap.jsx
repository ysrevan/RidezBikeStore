import React from 'react'
import './Contactmap.css'
function Contactmap() {
    return (
        <section id='contactmap'>
            <iframe className='bikemap' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2483.5651690283876!2d-0.12200557414508187!3d51.502846561036925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slondon%20eye!5e0!3m2!1saz!2saz!4v1750522672070!5m2!1saz!2saz" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </section>
    )
}

export default Contactmap