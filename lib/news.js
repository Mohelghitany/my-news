export function getAllNews() {
  const news = fetch("http://localhost:8080/news", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
      return [];
    });
  return news;
}

export function getLatestNews() {
  const news = fetch("http://localhost:8080/news/latest", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching latest news:", error);
      return [];
    });
  return news;
}

export function getAvailableNewsYears() {
  const years = fetch("http://localhost:8080/news/years", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching available news years:", error);
      return [];
    });
  return years;
}

export function getAvailableNewsMonths(year) {
  const months = fetch(`http://localhost:8080/news/${year}/months`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching available news months:", error);
      return [];
    });
  return months;
}

export function getNewsForYear(year) {
  const news = fetch(`http://localhost:8080/news/${year}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching news for year:", error);
      return [];
    });
  return news;
}

export function getNewsForYearAndMonth(year, month) {
  const news = fetch(`http://localhost:8080/news/${year}/${month}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching news for year and month:", error);
      return [];
    });
  return news;
}

export function getNewsBySlug(slug) {
  const news = fetch(`http://localhost:8080/news/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching news by slug:", error);
      return null;
    });
  return news;
}

export function getNewsImageBySlug(slug) {
  const image = fetch(`http://localhost:8080/news/${slug}/image`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching news image by slug:", error);
      return null;
    });
  return image;
}
