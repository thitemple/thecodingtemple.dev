<section class="hero">
	<h1>Hi, I'm Thiago Temple. I love building products, writing code and learning through it.</h1>
	<p>
		I'm a web-loving staff developer, driven by curiosity and a passion for learning. I'm eager to
		share my knowledge and always up for new challenges. With a friendly and open-minded approach, I
		embrace the ever-evolving world of web technologies, staying ahead of the game and inspiring
		others along the way.
	</p>
</section>

<style>
	.hero {
		background-image: var(--brand-gradient);
		padding: var(--size-8) var(--size-6);
		margin-inline: calc(var(--size-7) * -1);
	}

	h1 {
		font-family: var(--font-heading);
		color: var(--brand);
		font-weight: var(--font-weight-5);
		max-width: 42rem;
		line-height: 1;
		font-size: var(--font-size-4);
		padding-inline: var(--size-1);
	}

	.hero p {
		display: none;
		margin-block-start: var(--size-7);
		color: var(--text-2);
	}

	@media (min-width: 1024px) {
		h1 {
			font-size: var(--font-size-7);
		}

		.hero p {
			display: block;
		}
	}
</style>
