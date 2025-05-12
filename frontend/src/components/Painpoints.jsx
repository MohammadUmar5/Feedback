import "../styles/painpoints.css";



function PainPointBox({ text }) {
    return (
      <button className="painpointsbox px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-800 transition shadow-sm">
        {text}
      </button>
    );
  }



  export default PainPointBox ;
  