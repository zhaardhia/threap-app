/* eslint-disable no-param-reassign */
function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays}d ago`;
  } if (diffHours > 0) {
    return `${diffHours}h ago`;
  } if (diffMinutes > 0) {
    return `${diffMinutes} min ago`;
  } if (diffSeconds > 0) {
    return `${diffSeconds} sec ago`;
  }
  return 'just now';
}

function getUniqueCategory(obj) {
  const uniqueObjects = [...new Map(obj.map((item) => [item.category, item])).values()];
  return uniqueObjects;
}

const textTruncate = (str, length, ending) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  return str;
};

export { postedAt, getUniqueCategory, textTruncate };
