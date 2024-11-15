import React from 'react';

const Deaf = () => {
  const styles = {
    body: {
      backgroundImage: 'url(bg10.jpg)',
      
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      color: "white",
      fontWeight: 'bold',
     
      
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
    },
    image: {
      flex: 1,
      marginRight: '20px',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '10px',
    },
    content: {
      flex: 2,
    },
    heading: {
      fontSize: '2em',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1.2em',
      color: 'black',
    },
    reverseContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      flexDirection: 'row-reverse',
    },
    imageRow: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '20px',
      flexWrap: 'wrap',
    },
    rowImg: {
      width: '200px',
      height: 'auto',
      borderRadius: '10px',
      margin: '10px',
    },
    separator: {
      height: '2px',
      backgroundColor: 'black',
      margin: '20px 0',
      width: '100%',
    },
    middleParagraph: {
      flex: 1,
      textAlign: 'center',
      padding: '20px',
    },
    sideImages: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.body}>
      {/* First Section */}
      <div style={styles.container}>
        <div style={styles.image}>
          <img src="/deafstart.jpg" alt="Deaf community representation" style={styles.img} />
        </div>
        <div style={styles.content}>
          <h1 style={styles.heading}>Deaf Community</h1>
          <p style={styles.paragraph}>
            This page provides details about the deaf community and their stories.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div style={styles.reverseContainer}>
        <div style={styles.image}>
          <img src="/deaf12.jpg" alt="Awareness representation" style={styles.img} />
        </div>
        <div style={styles.content}>
          <h1 style={styles.heading}>Deaf Awareness</h1>
          <p style={styles.paragraph}>
            This section focuses on the importance of raising awareness and providing support for the deaf community.
          </p>
        </div>
      </div>

      {/* Short Paragraph */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p style={styles.paragraph}>
          Here are some visual representations of the vibrant deaf community, showcasing their strength, resilience, and unity.
        </p>
      </div>

      {/* Row of Images */}
      <div style={styles.imageRow}>
        <img src="/deaf16.jpg" alt="Community gathering" style={styles.rowImg} />
        <img src="/deaf17.jpg" alt="Support event" style={styles.rowImg} />
        <img src="/deaf19.jpg" alt="Artistic expression" style={styles.rowImg} />
        <img src="/deaf20.jpg" alt="Celebration event" style={styles.rowImg} />
      </div>

      {/* Separator Line */}
      <div style={styles.separator}></div>

      {/* Paragraph Before the Last Row */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p style={styles.paragraph}>
          Below are additional images highlighting the experiences and perspectives of the deaf community. These visuals reflect their culture, challenges, and achievements.
        </p>
      </div>

      {/* New Row of deaf5.jpg, deaf25.jpg, and deaf26.jpg */}
      <div style={styles.imageRow}>
        <img src="/deaf5.jpg" alt="Cultural event" style={styles.rowImg} />
        <img src="/deaf25.jpg" alt="Community support" style={styles.rowImg} />
        <img src="/deaf26.jpg" alt="Personal story" style={styles.rowImg} />
      </div>

      {/* Separator Line */}
      <div style={styles.separator}></div>

      {/* New Section with deaf8.jpg and deaf9.jpg */}
      <div style={styles.container}>
        <div style={styles.sideImages}>
          <img src="/deaf8.jpg" alt="Unity" style={styles.img} />
        </div>
        <div style={styles.middleParagraph}>
          <p style={styles.paragraph}>
            The images represent various aspects of life within the deaf community, highlighting their culture, unity, and contributions to society.
          </p>
        </div>
        <div style={styles.sideImages}>
          <img src="/deaf9.jpg" alt="Community engagement" style={styles.img} />
        </div>
      </div>

      {/* Separator Line */}
      <div style={styles.separator}></div>

      {/* New Section with deaf29.jpg and deaf30.jpg */}
      <div style={styles.container}>
        <div style={styles.sideImages}>
          <img src="/deaf29.jpg" alt="Cultural celebration" style={styles.img} />
        </div>
        <div style={styles.middleParagraph}>
          <p style={styles.paragraph}>
            The images represent various aspects of life within the deaf community, highlighting their culture, unity, and contributions to society.
          </p>
        </div>
        <div style={styles.sideImages}>
          <img src="/deaf30.jpg" alt="Event gathering" style={styles.img} />
        </div>
      </div>

      {/* Separator Line */}
      <div style={styles.separator}></div>
    </div>
  );
};

export default Deaf;
