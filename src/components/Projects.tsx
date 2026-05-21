import { useState } from "react";

type SubImage = {
  id: number;
  subImage: string;
};

type Project = {
  id: number;
  img: string;
  subImages: SubImage[];
};

type Props = {
  project: Project;
};

export default function Projects({ project }: Props) {
  const [mainImage , setMainImage] = useState(project.img);
  const [subImages , setSubImages] = useState(project.subImages);

  function handleSelectImage(clickedImage:string){
    const oldImage = mainImage

    setMainImage(clickedImage)


    const updateImages = subImages.map((img)=>{
      if(img.subImage === clickedImage){
        return {
          ...img , subImage:oldImage
        }
      }
      return img
    })
    setSubImages(updateImages)
  }
  return (
    <>
      {/* Main Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={mainImage}
          alt={project.img}
          loading="lazy"
          className="
            w-full h-full object-cover
            group-hover:scale-105
            transition-transform duration-700
          "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

      {/* Sub Images */}
      <div
        className="
          absolute bottom-2 left-[50%] translate-x-[-50%]
          flex items-center
          overflow-x-auto scrollbar-hide
          
          bg-background/40
          backdrop-blur-md
          border border-white/10
          w-fit
          lg:w-auto
          rounded-2xl
          px-2 py-2
          md:w-fit md:right-auto

          opacity-100 translate-y-0
          md:opacity-0 md:translate-y-6
          md:group-hover:translate-y-0
          md:group-hover:opacity-100

          transition-all duration-500
        "
      >
        {subImages.map((img, index) => (
          <div
            key={img.id}
            onClick={()=>handleSelectImage(img.subImage)}
            className={`              
              shrink-0
              w-11 h-11
              sm:w-16 sm:h-16
              md:w-18 md:h-18
              lg:w-20 lg:h-20

              rounded-xl
              overflow-hidden
              border-2 border-background
              cursor-pointer
              shadow-lg

              transition-all duration-300
              hover:-translate-y-2 hover:scale-105   
              `}

            style={{
              marginLeft: index === 0 ? 0 : 0,
              zIndex: subImages.length - index,
            }}
          >
            <img
              src={img.subImage}
              alt={img.subImage}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}