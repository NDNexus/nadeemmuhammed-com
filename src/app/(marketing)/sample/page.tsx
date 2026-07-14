import { CodeBlock } from "@/components/content/CodeBlock";
import Link from "next/link";

const AuditPage = () => {
  return (
    <main>
      <header className="section-lg bg-canvas-subtle">
        <div className="container">
          <div className="text-center">
            <h1 className="heading-xl heading-primary">Design Foundation Audit</h1>
            <p className="text-body-lg text-subtle mt-4 max-w-3xl mx-auto">
              A visual inventory of the Nadeem Digital Nexus design system. This page showcases available tokens, typography, surfaces, and components.
            </p>
          </div>
        </div>
      </header>

      <div className="section container-wide flow">
        {/* Typography Section */}
        <section className=" flow">
          <h2 className="heading-lg heading-secondary">1. Typography</h2>

          <div className="p-8 border border-default rounded-lg">
            <div className="grid grid-md gap-lg">
              <div className="flow">
                <h3 className="heading-md">Headings</h3>
                <h1 className="heading-xl">Heading XL</h1>
                <h2 className="heading-lg">Heading LG</h2>
                <h3 className="heading-md">Heading MD</h3>
                <h4 className="heading-sm">Heading SM</h4>
                <h5>H5 Element (Base)</h5>
                <h6>H6 Element (Base)</h6>
              </div>
              <div className="flow">
                <h3 className="heading-md">Body Text</h3>
                <p className="text-body-lg">
                  <strong>Body Large:</strong> This is a larger paragraph for introductory text, like the kind you might find in a hero section. It uses the `.text-body-lg` class.
                </p>
                <p className="text-body">
                  <strong>Body Default:</strong> This is the standard paragraph style for all long-form content. It provides a comfortable reading experience for articles and descriptions. It uses the `.text-body` class.
                </p>
                <p className="text-body-sm">
                  <strong>Body Small:</strong> This smaller text is ideal for captions, meta information, or fine print. It uses the `.text-body-sm` class.
                </p>
                <p className="text-subtle">
                  <strong>Muted Text:</strong> This is for secondary or tertiary information that needs to be de-emphasized. It uses the `.text-subtle` class.
                </p>
              </div>
              <div className="flow">
                <h3 className="heading-md">Inline Elements</h3>
                <p>
                  You can <a href="#" className="">style links</a> to stand out.
                  Make text <strong>bold for emphasis</strong> or <em>italic for nuance</em>.
                  Sometimes you need to <u>underline important</u> terms. For inline code, you can use the <code>code</code> element.
                </p>
                <blockquote className="border-l-4 border-accent pl-4 italic text-fg-subtle">
                  "This is a blockquote. It's a great way to highlight a testimonial or a key takeaway from a client success story."
                </blockquote>
              </div>
              <div className="flow">
                <h3 className="heading-md">Code Blocks</h3>
                <pre className="bg-canvas-dark text-fg-on-dark p-4 rounded-md text-body-sm overflow-x-auto">
                  <code>
                    {`const greet = () => {
  console.log("Hello, from Nadeem Digital Nexus!");
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Color & Surface Section */}
        <section className="flow">
          <h2 className="heading-lg heading-secondary">2. Color & Surface Audit</h2>
          <div className="grid grid-md gap-md">
            <div className="flow">
              <h3 className="heading-md">Canvas Backgrounds</h3>
              <div className="p-8 bg-canvas-default border border-default rounded-lg">Default Canvas</div>
              <div className="p-8 bg-canvas-subtle border border-default rounded-lg">Subtle Canvas</div>
              <div className="p-8 bg-canvas-highlight border border-default rounded-lg">Highlight Canvas</div>
              <div className="p-8 bg-canvas-dark text-fg-on-dark rounded-lg">Dark Canvas</div>
            </div>
            <div className="flow">
              <h3 className="heading-md">Surface Backgrounds</h3>
              <div className="p-8 bg-surface-default border border-default rounded-lg">Default Surface</div>
              <div className="p-8 bg-surface-raised border border-default rounded-lg shadow-lg">Raised Surface</div>
              <div className="p-8 bg-surface-dark text-fg-on-dark rounded-lg">Dark Surface</div>
              <div className="p-8 bg-canvas-dark rounded-lg">
                <div className="p-8 bg-surface-inverse rounded-lg">Inverse Surface (on dark)</div>
              </div>
            </div>
            <div className="flow">
              <h3 className="heading-md">Borders</h3>
              <div className="p-4 border-2 border-default rounded-lg">Default Border</div>
              <div className="p-4 border-2 border-subtle rounded-lg">Subtle Border</div>
              <div className="p-4 border-2 border-strong rounded-lg">Strong Border</div>
              <div className="p-4 border-2 border-accent rounded-lg">Accent Border</div>
            </div>
          </div>
        </section>

        {/* Button Audit */}
        <section className="flow">
          <h2 className="heading-lg heading-secondary">3. Button Audit</h2>
          <div className="p-8 border border-default rounded-lg">
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="btn btn-accent">Accent Button</button>
              <button className="btn btn-ghost">Ghost Button</button>
              <button className="btn btn-primary" disabled>Disabled Button</button>
              <button className="btn btn-primary">Active Button</button>
            </div>
          </div>
        </section>

        {/* Form Audit */}
        <section className="flow">
          <h2 className="heading-lg heading-secondary">4. Form Audit</h2>
          <div className="p-8 border border-default rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flow">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" id="name" className="form-input" placeholder="e.g., Nadeem Muhammed" />
                </div>
                <div className="form-field">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-textarea" placeholder="Your inquiry..."></textarea>
                </div>
                <div className="form-field">
                  <label htmlFor="service" className="form-label">Service</label>
                  <select id="service" className="form-select">
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>SEO Consulting</option>
                  </select>
                </div>
              </div>
              <div className="flow">
                <div className="form-field">
                  <span className="form-label">Project Type</span>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>New Website</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4" defaultChecked />
                      <span>Website Redesign</span>
                    </label>
                  </div>
                </div>
                <div className="form-field">
                  <span className="form-label">Budget</span>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="budget" className="h-4 w-4" />
                      <span>$5k - $10k</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="budget" className="h-4 w-4" defaultChecked />
                      <span>$10k - $20k</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Audit */}
        <section className="flow">
          <h2 className="heading-lg heading-secondary">5. Card Audit</h2>
          <div className="grid grid-lg gap-lg">
            <div className="card card-feature">
              <div className="card__body">
                <h3 className="heading-md">Feature Card</h3>
                <p className="text-body-sm text-subtle">Use this for highlighting key services or features. It's simple and icon-focused.</p>
              </div>
            </div>
            <div className="card card-content">
              <div className="card__media bg-canvas-subtle aspect-video"></div>
              <div className="card__body">
                <h3 className="heading-md">Content Card</h3>
                <p className="text-body-sm text-subtle">Perfect for blog posts, case studies, or news articles.</p>
              </div>
              <div className="card__footer">
                <button className="btn btn-secondary">Read More</button>
              </div>
            </div>
            <div className="card">
              <div className="card__body text-center">
                <p className="text-body-sm text-subtle uppercase tracking-widest">Projects Completed</p>
                <p className="heading-xl heading-primary">150+</p>
                <p className="text-body-sm text-subtle">Across 12 industries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table Audit */}
        <section className="flow">
          <h2 className="heading-lg heading-secondary">6. Table Audit</h2>
          <div className="border border-default rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-canvas-subtle">
                <tr>
                  <th className="p-4 heading-sm font-semibold">Service</th>
                  <th className="p-4 heading-sm font-semibold">Timeline</th>
                  <th className="p-4 heading-sm font-semibold">Price Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-default">
                  <td className="p-4">Corporate Website</td>
                  <td className="p-4">4-6 Weeks</td>
                  <td className="p-4">$8,000+</td>
                </tr>
                <tr className="border-t border-default">
                  <td className="p-4">E-commerce Store</td>
                  <td className="p-4">8-12 Weeks</td>
                  <td className="p-4">$15,000+</td>
                </tr>
                <tr className="border-t border-default">
                  <td className="p-4">SEO Foundation Package</td>
                  <td className="p-4">3-4 Weeks</td>
                  <td className="p-4">$5,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rich Content Audit */}
        <section className="flow">
          <h2 className="heading-lg heading-secondary">7. Rich Content Audit</h2>
          <div className="p-8 border border-default rounded-lg">
            <div className="text-content mx-auto text-body flow">
              <p>Here is how basic rich text content is styled. This includes lists, nested lists, and other common elements found in a blog post or a detailed service description.</p>
              <ul>
                <li>Unordered list item one.</li>
                <li>Unordered list item two.
                  <ul>
                    <li>Nested item one.</li>
                    <li>Nested item two.</li>
                  </ul>
                </li>
                <li>Unordered list item three.</li>
              </ul>
              <ol>
                <li>Ordered list item one.</li>
                <li>Ordered list item two.
                  <ol>
                    <li>Nested item one.</li>
                    <li>Nested item two.</li>
                  </ol>
                </li>
                <li>Ordered list item three.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA Audit */}
        <section className="flow">
          <h2 className="heading-lg heading-secondary">8. CTA Audit</h2>
          <div className="section-sm bg-canvas-subtle rounded-lg text-center">
            <div className="container flow">
              <h3 className="heading-lg">Ready to Start a Project?</h3>
              <p className="text-body-lg text-subtle">Let's build something great together.</p>
              <div>
                <button className="btn btn-primary">Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="section-sm bg-canvas-dark rounded-lg text-center">
            <div className="container flow">
              <h3 className="heading-lg text-fg-on-emphasis">Ready to Start a Project?</h3>
              <p className="text-body-lg text-fg-on-dark opacity-80">Let's build something great together.</p>
              <div>
                <button className="btn btn-accent">Enquire Now</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Code Block Section */}
      <section className="section container-wide flow">
        <h2 className="heading-lg heading-secondary">9. Code Block</h2>
        <div>
          <CodeBlock
            language="ts"
            code={`const greeting = "Assalamu Alaikum";

function sayHello() {
  console.log(greeting);
}`}
          />
        </div>
      </section>

      <section className="section container-wide flow">
        <h2 className="heading-lg heading-secondary">10. Gradient Backgrounds</h2>
        <div className="grid grid-md gap-lg">
          <div className="p-8 bg-gradient-brand text-fg-on-dark rounded-lg">Brand Gradient</div>
          <div className="p-8 bg-gradient-deep text-fg-on-dark rounded-lg">Deep Gradient</div>
          <div className="p-8 bg-gradient-subtle rounded-lg">Subtle Gradient</div>
          <div className="p-8 bg-gradient-luminous text-fg-default rounded-lg">Luminous Gradient</div>
          <div className="p-8 bg-gradient-interactive text-fg-on-dark rounded-lg">Interactive Gradient</div>
        </div>
      </section>

      <section className="section flow flex flex-col items-center">
        <div className="container-wide flow bg-gradient-deep text-fg-on-dark p-10 rounded-md flow">
          <h2 className="heading-lg text-fg-on-emphasis">Dark Blue gradient background</h2>
          <p className="text-body ">Hello, this is a dark gradient background usage example.Headings should be icy blue, and text can be white.</p>

          <div className="flex">
            <Link href="/contact" className="btn btn-accent">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="max-w-4xl flow bg-gradient-luminous text-fg-default p-10 rounded-md flow border border-subtle shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="heading-lg ">Dark Blue gradient background</h2>
          <p className="text-body ">Hello, this is a dark gradient background usage example.Headings should be icy blue, and text can be white.</p>

          <div className="flex">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>


      </section>

    </main>
  );
};

export default AuditPage;
