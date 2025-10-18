export const fileFormat = (url) => {
  if (!url || typeof url !== "string") return null;

  const fileExt = url.split(".").pop().toLowerCase().split("?")[0]; // remove query params if any

  if (["mp4", "mov", "avi", "mkv", "webm"].includes(fileExt)) {
    return "video";
  } else if (["jpg", "jpeg", "png", "gif", "svg", "webp"].includes(fileExt)) {
    return "image";
  } else if (["mp3", "wav", "ogg", "flac"].includes(fileExt)) {
    return "audio";
  } else if (
    ["pdf", "doc", "docx", "ppt", "pptx", "xls", "xlsx"].includes(fileExt)
  ) {
    return "document";
  } else if (["zip", "rar", "7z", "tar", "gz"].includes(fileExt)) {
    return "archive";
  } else {
    return "unknown";
  }
};


export const transformImage = (url="",w=100)=>url;