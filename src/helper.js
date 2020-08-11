export const manipulateData = data => {
    const outputData = {};
  for(let i = 0, len = data.length; i< len; i++) {
        const userInformation = data[i];
        const { class: userClass, sectionInformation } = userInformation;
        if(outputData[userClass]) {
            if(outputData[userClass][sectionInformation]) {
                outputData[userClass][sectionInformation].push(userInformation);
            } else {
                outputData[userClass][sectionInformation] = [];
                outputData[userClass][sectionInformation].push(userInformation);
            }
        } else {
            outputData[userClass] = {sectionInformation: [userInformation] };
        }
    }
  return outputData;
}

export default manipulateData;