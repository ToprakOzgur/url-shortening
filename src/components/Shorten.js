import React, { useState } from "react";

const Shorten = () => {
  const [link, setLink] = useState("");
  const [results, setResults] = useState([]);
  const [copied, setCopied] = useState(-1);

  function handleCopy(index) {
    setCopied(index);
  }

  async function shorten(e) {
    e.preventDefault();

    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.ok) {
      setLink("");
      return;
    }

    setResults((oldResults) => {
      if (oldResults.length < 5)
        return [
          ...oldResults,
          {
            link,
            shortLink: data.result.short_link,
          },
        ];

      oldResults.shift();
      return [
        ...oldResults,
        {
          link,
          shortLink: data.result.short_link,
        },
      ];
    });
    setLink("");
  }
  function handleChange(e) {
    setLink(e.target.value);
  }
  return (
    <>
      <section className="container shorten">
        <form>
          <input type="text" placeholder="Shorten a link here..." onChange={handleChange} value={link} />
          <button onClick={shorten}> Shorten It!</button>
        </form>
      </section>

      <section className="details">
        <div className="container">
          {results?.map((res, index) => {
            return (
              <div className="result" key={index}>
                <p className="result__link">{res.link}</p>
                <p className="result__short">{res.shortLink}</p>

                <button
                  className={copied !== index ? "btn" : "btn copied"}
                  onClick={() => {
                    handleCopy(index);
                    navigator.clipboard.writeText(`${res.shortLink}`);
                  }}
                >
                  {copied !== index ? "Copy" : "Copied!"}
                </button>
              </div>
            );
          })}
          <div className="details__heading">
            <h2>Advanced Statistics</h2>
          </div>
          <aside className="cards">
            <div className="card card-1">
              <h3 className="card__description">Brand Recognition</h3>
              <p className="card__details">
                Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
              </p>
            </div>
            <div className="card card-2">
              <h3 className="card__description">Detailed Records</h3>
              <p className="card__details">
                Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
              </p>
            </div>
            <div className="card card-3">
              <h3 className="card__description">Fully Customizable</h3>
              <p className="card__details">
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Shorten;
