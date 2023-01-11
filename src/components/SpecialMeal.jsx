import '../styles/SpecialMeal.css'

export function SpecialMeal() {

    return (
        <div className='meal__card'>

            <img src="https://comeonburger.com.br/wp-content/uploads/2019/12/xburger.jpg" alt="meal image" />

            <div className="name-price">
                <span>Cheddar burguer</span>
                <span>R$ 22,90</span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper, erat ac facilisis maximus, tortor ipsum varius risus, non vulputate mauris magna a ligula.</p>

            <span className='order_now'>Order now</span>
        </div>
    )
}