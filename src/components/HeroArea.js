import React from 'react';
import './HeroArea.css';

const HeroArea = () => {
  return (
    <div className='HeroBox'>
        <div className='Hero'>
            <div className='MainHero'>
                <div className='allTexts'>
                    <div className="texts">
                        <p className=''>Hello! i'm</p>
                        <h2>Rashed Abdullah</h2>
                    </div>
                    <div className='skills'>
                        <ul className='ulList'>
                            <li>Front-end Developer</li>
                            <li>Graphic Disginer</li>
                            <li>Vedio Editor</li>
                        </ul>
                    </div>
                    <div className='texts'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum repellat asperiores, deserunt enim sapiente et? Necessitatibus accusantium quibusdam blanditiis quam nisi, consequuntur odio accusamus cumque quis, minus, nam velit!</p>
                        <div className="buttons">
                            <a href=""><button type="button" class="btn btn-primary">Contact</button></a>

                            <a href=""><button type="button" class="btn btn-success">Resume</button></a>

                            <a href=""><button type="button" class="btn btn-outline-primary">Skills</button></a>

                        </div>
                    </div>
                </div>
            </div>

            <div className='AsideHero'>
                <div className='asideIcons'>
                    <div className='singleAsideIcon'>
                        <a href=""><p className='mt-1'><i class="fa-solid fa-house-user"></i>Home</p></a>
                    </div>

                    <div className='singleAsideIcon'>
                        <a href=""><p className='mt-1'><i class="fa-solid fa-envelope"></i>Contact</p></a>
                    </div>

                    <div className='singleAsideIcon'>
                        <a href=""><p className='mt-1'><i class="fa-solid fa-list-check"></i>Projects</p></a>
                    </div>

                    <div className='singleAsideIcon'>
                        <a href=""><p className='mt-1'><i class="fa-solid fa-user"></i>About</p></a>
                    </div>

                    <div className='singleAsideIcon'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroArea;