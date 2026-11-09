"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/app/data/site";

export function ProductExplorer() {
  const [expanded, setExpanded] = useState<number | null>(null);

  function toggle(index: number) {
    setExpanded((current) => (current === index ? null : index));
  }

  return (
    <div className="product-list">
      {products.map((product, index) => {
        const isOpen = expanded === index;
        return (
          <article
            className={`product-row ${product.accent} ${isOpen ? "open" : ""}`}
            key={product.name}
          >
            <button
              className="product-row-head"
              type="button"
              aria-expanded={isOpen}
              aria-controls={`product-panel-${index}`}
              onClick={() => toggle(index)}
            >
              <span className="product-row-code">{product.code}</span>
              <span className="product-row-title">
                <strong>{product.name}</strong>
                <small>{product.tagline}</small>
              </span>
              <span className="product-row-price">
                Starting at <strong>{product.from}</strong>
              </span>
              <span className="product-row-toggle" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className="product-row-panel"
              id={`product-panel-${index}`}
              hidden={!isOpen}
            >
              <div className="product-row-body">
                <p>{product.description}</p>
                <ul className="product-row-includes">
                  {product.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="product-row-actions">
                  <Link href={`/start?about=${product.name}`}>
                    Start with {product.name} <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}