import './font-custom.css'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-200 py-12">
            <section className='flex justify-between max-w-3xl mx-auto border-b-2  border-b-slate-400'>
                <article className='font_custom'>
                    <ul className='flex flex-col gap-y-2'>
                        <li className=''>PRODUCTOS:</li>
                        <li>producto2</li>
                        <li>producto3</li>
                        <li>producto4</li>
                        <li>producto5</li>
                        <li>producto6</li>
                    </ul>
                </article>
                <article className='font_custom'>
                    <ul className='flex flex-col gap-y-2'>
                        <li>UBICATION:</li>
                        <li>Ubication1</li>
                        <li>Ubication2</li>
                        <li>Ubication3</li>
                        <li>Ubication4</li>
                        <li>Ubication5</li>
                        <li>Ubication6</li>
                    </ul>
                </article>
                <article className='font_custom'>
                    <span>About us</span>
                </article>
            </section>
            <span className='flex justify-end max-w-3xl mx-auto'>copy@</span>
        </footer>
    )
}

export default Footer