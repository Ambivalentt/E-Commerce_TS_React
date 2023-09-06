import ContentLoader from 'react-content-loader'
import './customstyles.css'
const LoaderGrid = () => {
  return (
    <section className='custom-cale pt-24'>
      <ContentLoader
        speed={2}
        width={600}
        height={600}
        viewBox="0 0 600 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="8" y="101" rx="0" ry="0" width="191" height="154" />
        <rect x="6" y="273" rx="0" ry="0" width="191" height="154" />
        <rect x="210" y="100" rx="0" ry="0" width="191" height="154" />
        <rect x="211" y="272" rx="0" ry="0" width="191" height="154" />
        <rect x="414" y="272" rx="0" ry="0" width="191" height="154" />
        <rect x="413" y="100" rx="0" ry="0" width="191" height="154" />
      </ContentLoader>
    </section>


  )
}

export default LoaderGrid