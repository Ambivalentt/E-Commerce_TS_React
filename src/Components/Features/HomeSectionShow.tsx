import img_1_section from '../../assets/container2Home/section_img_1.avif'
import img_2_section from '../../assets/container2Home/section_img_2.avif'
import img_3_section from '../../assets/container2Home/section_img_3.webp'
import img_4_section from '../../assets/container2Home/section_img_4.avif'
import img_5_section from '../../assets/container2Home/section_img_5.avif'
import HoverContainer from '../Features/FirstSectionItems'


const HomeSectionShow = () => {
    return (
        <section className='flex pb-20 justify-center max-w-8xl mx-auto overflow-hidden'>
            <article className='grid grid-rows-2 gap-y-6 mx-5 rounded-xl overflow-hidden'>
                <HoverContainer img={img_1_section} details={'tittle'} discount={'Discount status'} />
                <HoverContainer img={img_2_section} details={'tittle'} discount={'Discount status'} />
            </article>
            <article>
                <HoverContainer img={img_3_section} details={'tittle'} discount={'Discount status '} />
            </article>
            <article className='flex flex-col gap-y-5 mx-5'>
                <HoverContainer img={img_4_section} details={'tittle'} discount={'Discount status'} />
                <HoverContainer img={img_5_section} details={'tittle'} discount={'Discount status'} />
            </article>
        </section>
    )
}

export default HomeSectionShow