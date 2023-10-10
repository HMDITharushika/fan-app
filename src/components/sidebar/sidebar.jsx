import "./sidebar.css"

export default function Sidebar(){
    return (
        <div className="Overall">
        <div className="sidebar">
            <div className="sidebarItem">
                <h1 className="sidebarTitle"> LATEST VIDEOS  </h1>

                <div className="img-about" >
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/QJO3ROT-A4E?si=4msqHMq8Bav_FM_f" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
                </div>
            </div>

                <div className="img-about">


                    <div className=""> 
                    <iframe width="100%" height={300}
                     src="https://www.youtube.com/embed/XzOvgu3GPwY?si=GRxgZvJF-YesxBzC" 
                     title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     allowfullscreen></iframe> 
                     
                     <iframe width="560" height="300"
                      src="https://www.youtube.com/embed/DwcunIiWddI?si=lFfB1q_aK5u9Nt7q" 
                      title="YouTube video player" frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowfullscreen></iframe>
                      
                      <iframe width="560" height="300"
                       src="https://www.youtube.com/embed/osmHArcf_aE?si=HC0xesz7Mjb3d-0t" 
                       title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                         allowfullscreen></iframe>

                    <iframe width="560" height="300"
                     src="https://www.youtube.com/embed/vtsE5L3Powc?si=puu-F0vEbSGK1vHn"
                      title="YouTube video player" frameborder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                      </div>
                
                </div>
            </div>

            

        </div>
    
    )
}