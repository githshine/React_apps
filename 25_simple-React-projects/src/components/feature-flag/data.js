const dummyAPIResponse = {
  showLightAndDarkMode: true,
  showImageSliderMode: true,
  showQRCodeGenerator: true,
  showRandomColor: true,
  showTreeView: false,
  showTicTacToe: true,
};

function featureFlagsDateServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);
    else reject('Some error occured! Please try again!');
  });
}

export default featureFlagsDateServiceCall;
