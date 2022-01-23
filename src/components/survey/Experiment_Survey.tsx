import React, { FC } from "react";
import "./Survey.css";

const Survey: FC<{ onGo: (...args: any[]) => any }> = ({ onGo }) => {
  const framee: any = React.createRef();

  return (
    <div>
      {/* <iframe
        width="1000px"
        height="1100px"
        title="survey"
        id="frame44"
        ref={framee}
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZ__rJ3PZxUMFVSUE4yU0FEWUE0SlA3WktTWkVQSktWWi4u&embed=true&QuestionId_r97557f04cfea490cb5512e36d3caec73=44"
        style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
        // allowfullscreen
        // webkitallowfullscreen
        // mozallowfullscreen
        // msallowfullscreen
      /> */}

      {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdv-gsi6flW19NSOHtWJkOnXeYFCXSwPuKuXgdYqxXktsxRcA/viewform?embedded=true&entry.1931746735=test"
        // https://docs.google.com/forms/d/e/1FAIpQLSdv-gsi6flW19NSOHtWJkOnXeYFCXSwPuKuXgdYqxXktsxRcA/viewform?usp=sf_link
        width="640"
        height="835"
      >
        Loading…
      </iframe> */}
    </div>
  );
};

export default Survey;

// This does not work::
//
//
{
  /* <iframe
  width="1000px"
  height="1100px"
  title="survey"
  id="frame44"
  ref={framee}
  src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZ__rJ3PZxUMFVSUE4yU0FEWUE0SlA3WktTWkVQSktWWi4u&embed=true&QuestionId_r97557f04cfea490cb5512e36d3caec73=44"
  // frameborder="0"
  // marginwidth="0"
  // marginheight="0"
  onLoad={() => {
    console.log("gggggggg");
    // const f =  document &&
    // document.getElementById(
    //   "frame44"
    // );
    var iframeDocument = document.getElementById("frame44");
    const ss = iframeDocument as HTMLIFrameElement;
    const tt = framee;
    console.log(tt.current.contentWindow.document);

    // console.log(tt.current.getElementById("content-root"));
    console.log(ss.contentDocument);
    // const s =
    //   iframeDocument &&
    //   iframeDocument.getElementById(
    //     "QuestionId_r97557f04cfea490cb5512e36d3caec73"
    //   );
    // console.log(s);
    // QuestionId_r97557f04cfea490cb5512e36d3caec73
  }}
  style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
  // allowfullscreen
  // webkitallowfullscreen
  // mozallowfullscreen
  // msallowfullscreen
/>; */
}
