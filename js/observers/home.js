const obersver = new IntersectionObserver(
    (entries) => {
      for (entry of entries) {
        //console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      }
    },
    {
      threshold: 0.75,
    }
  );
  const services = document.querySelectorAll(".services .service-item");
  services.forEach((service) => {
    obersver.observe(service);
  });
  const avantages = document.querySelectorAll(".avantages .avantage");
  for (avantage of avantages) {
    obersver.observe(avantage);
  }