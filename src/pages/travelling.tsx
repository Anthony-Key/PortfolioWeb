import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Image {
  name: string;
  url: string;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [firstDisplay, setFirstDisplay] = useState<Image[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20); // Number of images to display per page
  const [header, setHeader] = useState<string>();
  const [gitUrl, setGitUrl] = useState<string>();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const myQueryParam = queryParams.get("location");
    setHeader(myQueryParam?.toString().toUpperCase());
    setGitUrl(myQueryParam?.toString());
  }, []);

  useEffect(() => {
    if (gitUrl) {
      fetchImages();
    }
  }, [gitUrl]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/Anthony-Key/PortfolioWeb/contents/assets/travel/${gitUrl}`
      );
      const data = await response.json();

      const imageFiles = data.filter(
        (file: any) =>
          file.type === "file" && file.name.match(/\.(jpg|jpeg|png|gif)$/)
      );

      imageFiles.forEach(async (file: any, index: number) => {
        const imageResponse = await fetch(file.download_url);
        const imageBlob = await imageResponse.blob();
        const imageUrl = URL.createObjectURL(imageBlob);

        const image = {
          name: file.name,
          url: imageUrl,
        };

        setImages((prevImages) => [...prevImages, image]);

        if (index < 5) {
          setFirstDisplay((prevFirstDisplay) => [...prevFirstDisplay, image]);
        }
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#1c223b]">
      <Header
        home={"/"}
        services={""}
        travelling={"/travelhub"}
        headerTitle={header}
        warning="IF WHITE, TRY REFRESH"
      />
      <Carousel responsive={responsive}>
        {firstDisplay.map((image) => (
          <img
            key={image.name}
            src={image.url}
            alt={image.name}
            className="h-screen w-screen"
          />
        ))}
      </Carousel>
      <div className="flex-col items-center justify-center">
        <h2 className="text-white text-center font-bold text-3xl mt-5 mb-5">
          Gallery
        </h2>
        <div className="flex items-center justify-center">
          <h4 className="text-sm font-bold text-white bg-orange-400 rounded-full pl-2 pr-2 p-1 w-72 text-center">
            TRY REFRESH IF NOTHING LOADS!
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
        {currentImages.map((image, index) => (
          <img
            key={image.name}
            className="rounded-3xl p-2 w-full h-96 object-cover"
            src={image.url}
            alt={image.name}
          />
        ))}
      </div>
      <div className="pagination text-center">
        {Array.from({ length: Math.ceil(images.length / imagesPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`${
                currentPage === index + 1 ? "active" : ""
              } text-white text-2xl hover:bg-white hover:text-black m-2 font-bold`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
