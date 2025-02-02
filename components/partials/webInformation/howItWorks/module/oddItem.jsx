import Image from 'next/image'

const OddItems = ({data,index}) => {
    return (
        <div className="row oddItem container-fluid px-5">
            <div className="col-12 col-lg-3 d-flex justify-content-center ">
                <Image
                    width={238}
                    height={181} 
                    src={data.image} 
                    alt="laxmi" />
            </div>
            <div className="col-12 col-lg-8 content">
                <span className="index">{index+1}</span>
                <h1 className="title">{data.title}</h1>
                <p className="desc">{data.description}</p>
            </div>
        </div>
    )
}

export default OddItems