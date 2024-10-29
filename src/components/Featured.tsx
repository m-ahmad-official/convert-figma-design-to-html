import Image from "next/image";

export default function Featured() {
  return (
    <div>
      <h2
        style={{
          // fontFamily: "Heebo",
          fontSize: "22px",
          fontWeight: "bold",
          marginTop: "80px",
          marginLeft: "270px",
        }}
      >
        Featured works
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "40px",
        }}
      >
        <Image
          src={"/image1.png"}
          height={180}
          width={246}
          alt="trading"
          style={{
            // marginRight: "50px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            marginLeft: "220px",
          }}
        />
        <div
          style={{
            marginRight: "500px",
          }}
        >
          <h1
            style={{
              // fontFamily: "Heebo"
              fontWeight: "700",
              fontSize: "30px",
              marginBottom: "15px",
            }}
          >
            Designing Dashboards
          </h1>
          <div
            style={{
              display: "flex",
              marginBottom: "15px",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                // fontFamily: "Heebo"
                fontWeight: "700",
                fontSize: "18px",
                height: "24px",
                width: "68px",
                backgroundColor: "#F98585",
                color: "white",
                borderTopLeftRadius: "12.5px",
                borderTopRightRadius: "12.5px",
                borderBottomLeftRadius: "12.5px",
                borderBottomRightRadius: "12.5px",
                display: "flex",
                justifyContent: "center",
                marginRight: "30px",
              }}
            >
              2020
            </h3>
            <p
              style={{
                // fontFamily: "Heebo"
                fontSize: "20px",
                color: "#0000009E",
              }}
            >
              Dashboard
            </p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
            <br />
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt
            <br />
            nostrud amet.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "120px",
        }}
      >
        <Image
          src={"/image2.png"}
          height={180}
          width={246}
          alt="trading"
          style={{
            // marginRight: "50px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            marginLeft: "220px",
          }}
        />
        <div
          style={{
            marginRight: "500px",
          }}
        >
          <h1
            style={{
              // fontFamily: "Heebo"
              fontWeight: "700",
              fontSize: "30px",
              marginBottom: "15px",
            }}
          >
            Designing Dashboards
          </h1>
          <div
            style={{
              display: "flex",
              marginBottom: "15px",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                // fontFamily: "Heebo"
                fontWeight: "700",
                fontSize: "18px",
                height: "24px",
                width: "68px",
                backgroundColor: "#F98585",
                color: "white",
                borderTopLeftRadius: "12.5px",
                borderTopRightRadius: "12.5px",
                borderBottomLeftRadius: "12.5px",
                borderBottomRightRadius: "12.5px",
                display: "flex",
                justifyContent: "center",
                marginRight: "30px",
              }}
            >
              2020
            </h3>
            <p
              style={{
                // fontFamily: "Heebo"
                fontSize: "20px",
                color: "#0000009E",
              }}
            >
              Dashboard
            </p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
            <br />
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt
            <br />
            nostrud amet.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "120px",
        }}
      >
        <Image
          src={"/image3.png"}
          height={180}
          width={246}
          alt="trading"
          style={{
            // marginRight: "50px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            marginLeft: "220px",
          }}
        />
        <div
          style={{
            marginRight: "500px",
          }}
        >
          <h1
            style={{
              // fontFamily: "Heebo"
              fontWeight: "700",
              fontSize: "30px",
              marginBottom: "15px",
            }}
          >
            Designing Dashboards
          </h1>
          <div
            style={{
              display: "flex",
              marginBottom: "15px",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                // fontFamily: "Heebo"
                fontWeight: "700",
                fontSize: "18px",
                height: "24px",
                width: "68px",
                backgroundColor: "#F98585",
                color: "white",
                borderTopLeftRadius: "12.5px",
                borderTopRightRadius: "12.5px",
                borderBottomLeftRadius: "12.5px",
                borderBottomRightRadius: "12.5px",
                display: "flex",
                justifyContent: "center",
                marginRight: "30px",
              }}
            >
              2020
            </h3>
            <p
              style={{
                // fontFamily: "Heebo"
                fontSize: "20px",
                color: "#0000009E",
              }}
            >
              Dashboard
            </p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
            <br />
            officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt
            <br />
            nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
}
