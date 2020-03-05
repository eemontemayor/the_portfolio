import React from 'react'
import './AboutPage.css'
import Split from '../components/Split/Split'
import about from '../images/about.jpg'
export default function AboutPage(props) {
    return (
        <div className='AboutPage'>
            <Split className='black' >
                <section className='img-cont'>

                    <img src={about}  className='about-img'alt='a dastardly handsome dog' />
                </section>
                    </Split>
                    <Split className='white' >
                <section className='about-text-container'>
                    <p className='about-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget. In aliquam sem fringilla ut. Aenean vel elit scelerisque mauris pellentesque. Dignissim sodales ut eu sem. Id diam vel quam elementum. Vitae congue mauris rhoncus aenean. Id semper risus in hendrerit gravida rutrum quisque non. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Elementum eu facilisis sed odio morbi.
                     
                    </p>
                    <p className='about-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Arcu non sodales neque sodales ut etiam. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. In nibh mauris cursus mattis molestie a iaculis at. Vel pretium lectus quam id leo. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Etiam tempor orci eu lobortis elementum nibh tellus. Augue lacus viverra vitae congue eu consequat ac felis donec. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Cursus in hac habitasse platea. Neque viverra justo nec ultrices. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat.
                    </p>
                    <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum. Integer feugiat scelerisque varius morbi enim. Sed arcu non odio euismod lacinia at. Pulvinar elementum integer enim neque volutpat. Vitae nunc sed velit dignissim sodales. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Augue interdum velit euismod in pellentesque massa. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Iaculis urna id volutpat lacus laoreet non. Nascetur ridiculus mus mauris vitae. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Eu augue ut lectus arcu bibendum at varius vel pharetra. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Neque sodales ut etiam sit amet nisl purus in mollis.

                    </p>
                        </section>
                    </Split>
        </div>
    )
    
}