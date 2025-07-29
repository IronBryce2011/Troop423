import React from "react";

const imageUrls = [
  'https://i.ibb.co/v4ygqR77/unnamed.jpg',
  'https://i.ibb.co/391xXggr/AP1-Gcz-Ox-Bq6-Cf-Pojr-Uk-Iplko-EP9-TUl-Lw0at-Vm-QJ8-FNk-IZK8se-J4-WJO2z-Tjam58-XSu-Oq-Zc0-JG-A0-UDV.jpg',
  'https://i.ibb.co/jPkvVzrZ/AP1-Gcz-NDFxb-Hs-L2-C2-Pq-S6-Ax-W69d8-Gpa-V-s1i-PZtx-IKj-Isp-Se-HG8qdk-Fm-OJz-Hi-GL-ODHNR6-KEi0gi-VF.jpg',
  'https://i.ibb.co/TMQ5CvCt/AP1-Gcz-OSKFIBRak-PXWji-O46-Prr5qbeizns-RRZVRk-V6-YOSzz4hf-KGh-Xjx-L8y-KVH5t-JBBKk-LJ140-Cdzp-Ox-PEd.jpg',
  'https://i.ibb.co/1tGBXWcP/AP1-Gcz-PB03-DBc-EA-48s-RR4kzn-Hk-XIFpa-L3y-SWg-XH8-nmtc2z-Z0h0l-KTUUKln-XUoa4s6-Dcuody-SNSn-Zno-Fjo.jpg',
  'https://i.ibb.co/RTpN4PmT/AP1-Gcz-Okag3-94-SA4-Feff6-ZRVBGT1-H4ko-OHSw1-279-DZO9dae-EJx-Rr-CWI2-A4-GS02w6yeib-Ijr-R0ay-Uwej-CK.jpg'
];

function PhotoGallery() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1rem",
      }}
    >
      {imageUrls.map((url, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "350px",
            width: "100%",
          }}
        >
          <img
            src={url}
            alt={`Troop photo ${idx + 1}`}
            style={{
              maxWidth: "350px",
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              objectFit: "cover",
            }}
          />
          <span
            style={{
              marginTop: "0.5rem",
              fontSize: "0.85rem",
              wordBreak: "break-all",
              textAlign: "center",
              color: "#333",
              background: "#f5f5f5",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              userSelect: "all"
            }}
          >
       
          </span>
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
