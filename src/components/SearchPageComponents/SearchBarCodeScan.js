import Html5QrcodePlugin from "./Html5QrcodeScannerPlugin";

const SearchBarCodeScan = (props) => {

    const onNewScanResult = (decodedText, decodedResult) => {
        console.log(decodedText, decodedResult)
    };

    return (
        <div>
            <Html5QrcodePlugin 
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
                />
            </div>
        );
    };
    
    export default SearchBarCodeScan
            
           

