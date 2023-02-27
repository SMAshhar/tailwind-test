import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return (
        <div className="wrapper">
            <div className="menu flex justify-between">
                <a href="#" className="active">Profile</a>
                <a href="#">Notifications</a>
                <a href="#">Payments</a>
                <a href="#">Settings</a>
            </div>

            <h1>CSS Flex & Grid</h1>
            <p>This book takes a completely different approach. I won't teach you the things flex and grid can do. Instead, I will first show you some components and layouts and make you think how to build them using the CSS concepts you already know. Now you have a problem, and you want a solution.</p>
            <div className="links flex justify-between">
                <a href="#"> Prev </a>
                <a href="#"> Next </a>
            </div>
            <div className="container flex justify-around">
                <div>Justify around</div>
                <div className="team-profile">
                    <Image src="/pexels-photo-7242908.jpeg" className="team-img" width={150} height={150} alt="image" />
                    <h3>Alexa Kardi</h3>
                    <p>Founder and CEO</p>
                </div>
                <div className="team-profile">
                    <Image src="/2.webp" className="team-img" width={150} height={150} alt="image" />
                    <h3>Tavell Monroe</h3>
                    <p>Web Developer</p>
                </div>
                <div className="team-profile">
                    <Image src="/3.webp" className="team-img" width={150} height={150} alt="image" />
                    <h3>Adale Smith</h3>
                    <p>Marketing Specialist</p>
                </div>
                <div className="team-profile">
                    <Image src="/4.webp" className="team-img" width={150} height={150} alt="image" />
                    <h3>Thomas Mason</h3>
                    <p>UX Designer</p>
                </div>
            </div>


        </div>
    )
}