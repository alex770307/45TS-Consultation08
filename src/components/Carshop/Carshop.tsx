import Bike from "../Bike/Bike";
import Car from "../Car/Car";
import honda from '../Carshop/img/typer_gallery_1.png'

export default function Carshop(): JSX.Element {
    return(
        <div>
            <h1>Car shop</h1>
            <h2>Cars</h2>
            <Car brand="mercedes" color="green" />
            <Car brand="Tesla" color="blue" />
            <Car brand="Opel" color="yellow" />
            <Car brand="Lada" color="red" />
            <Car brand="Audi" color="black" />
            <Bike gears={4} brand="Honda" price={18000} />
            <Bike gears={5} brand="Yamaha" price={25000} />
            <Bike gears={4} brand="BMW" price={10000} />
            <h1>Первый способ подгрузить изображение через импорт</h1>
            <img src={honda} alt="" />
            <h1>Второй способ из папки public, без точки перед слеш</h1>
            <img src="/typer_gallery_2.png" alt=""/>
        </div>
    )
}