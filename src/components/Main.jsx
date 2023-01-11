import '../styles/Main.css'
import { SpecialMeal } from './SpecialMeal'

export function Main() {

    return (
        <main>

            <section className="welcome">

                <div className="left">
                    <h1>Little lemon</h1>
                    <span>Chicago</span>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, erat ac facilisis maximus, tortor ipsum varius risus, non vulputate mauris magna a ligula. Sed vel diam et tellus elementum interdum. Donec a accumsan dolor. Mauris lobortis pharetra semper. Donec purus leo, aliquet a neque vel, malesuada molestie est.</p>

                    <button>Reserve a table</button>
                </div>

                <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" alt="meal image" />
            </section>

            <section className="specials">

                <div className='special__header'>
                    <h2>Specials</h2>
                    <button>Online menu</button>
                </div>

                <div className='meals__grid'>
                    <SpecialMeal />
                    <SpecialMeal />
                    <SpecialMeal />
                    <SpecialMeal />
                </div>

            </section>

            <section className="testimonials">
                <h2>Testimonials</h2>
            </section>

            <section className="about">

                <div className="left">
                    <h1>Little lemon</h1>
                    <span>Chicago</span>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, erat ac facilisis maximus, tortor ipsum varius risus, non vulputate mauris magna a ligula. Sed vel diam et tellus elementum interdum. Donec a accumsan dolor. Mauris lobortis pharetra semper. Donec purus leo, aliquet a neque vel, malesuada molestie est.</p>
                </div>

                <img src="https://siterg.uol.com.br/wp-content/uploads/2021/08/carat-restaurante-1-1500-768x512.jpg" alt="meal image" />
            </section>
        </main>
    )
}