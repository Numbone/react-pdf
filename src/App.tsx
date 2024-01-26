import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import { MyDocument } from "./components/MyDocument";
function App() {
  return (
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  );
}

export default App;
