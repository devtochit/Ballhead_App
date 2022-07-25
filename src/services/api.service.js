const url = 'https://api.spacexdata.com/v3/rockets';
const url1 = 'https://api.spacexdata.com/v3/missions';

function restructureData(data) {
  const arr = [];
  data.forEach((data) => {
    arr.push({
      id: data.id,
      name: data.rocket_name,
      description: data.description,
      flickr_images: data.flickr_images,
      reserved: false,
    });
  });
  return arr;
}

function takeMissionData(missions) {
  const arr = [];
  missions.forEach((mission) => {
    arr.push({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      mission: false,

    });
  });
  return arr;
}

export const getRocketData = async (job, thunkAPI) => {
  try {
    const response = await fetch(url, job);
    const data = await response.json();
    const data2 = restructureData(data);
    return data2;
  } catch {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};

export const getMissionData = async (job, thunkAPI) => {
  try {
    const response = await fetch(url1, job);
    const data = await response.json();
    const data2 = takeMissionData(data);
    return data2;
  } catch {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};
