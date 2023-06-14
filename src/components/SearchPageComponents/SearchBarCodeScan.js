const App = (props) => {

    const onNewScanResult = (decodedText, decodedResult) => {
        // handle decoded results here
    };

    return (
        <div className="App">
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
    );
};

