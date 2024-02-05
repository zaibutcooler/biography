<div>Hello</div>


<!-- <main class="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
    <section class="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-bold">{RESUME_DATA.name}</h1>
          <p class="max-w-md text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.about}
          </p>
          <p class="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <a
              class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href={RESUME_DATA.locationLink}
              target="_blank"
            >
              <GlobeIcon class="h-3 w-3" />
              {RESUME_DATA.location}
            </a>
          </p>
          <div class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            {RESUME_DATA.contact.email ? (
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <Button class="h-8 w-8" variant="outline" size="icon">
                  <MailIcon class="h-4 w-4" />
                </Button>
              </a>
            ) : null}
            {RESUME_DATA.contact.tel ? (
              <a href={`tel:${RESUME_DATA.contact.tel}`}>
                <Button class="h-8 w-8" variant="outline" size="icon">
                  <PhoneIcon class="h-4 w-4" />
                </Button>
              </a>
            ) : null}
            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                class="h-8 w-8"
                variant="outline"
                size="icon"
              >
                <a href={social.url}>
                  <social.icon class="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
          <div class="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
            {RESUME_DATA.contact.email ? (
              <a href={`mailto:${RESUME_DATA.contact.email}`}>
                <span class="underline">{RESUME_DATA.contact.email}</span>
              </a>
            ) : null}
            {RESUME_DATA.contact.tel ? (
              <a href={`tel:${RESUME_DATA.contact.tel}`}>
                <span class="underline">{RESUME_DATA.contact.tel}</span>
              </a>
            ) : null}
          </div>
        </div>

        <Avatar class="h-28 w-28">
          <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
          <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
        </Avatar>
      </div>
      <Section>
        <h2 class="text-xl font-bold">About</h2>
        <p class="text-pretty font-mono text-sm text-muted-foreground">
          {RESUME_DATA.summary}
        </p>
      </Section>
      <Section>
        <h2 class="text-xl font-bold">Work Experience</h2>
        {RESUME_DATA.work.map((work) => {
          return (
            <Card key={work.company}>
              <CardHeader>
                <div class="flex items-center justify-between gap-x-2 text-base">
                  <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a class="hover:underline" href={work.link}>
                      {work.company}
                    </a>

                    <span class="inline-flex gap-x-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          class="align-middle text-xs"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div class="text-sm tabular-nums text-gray-500">
                    {work.start} - {work.end}
                  </div>
                </div>

                <h4 class="font-mono text-sm leading-none">
                  {work.title}
                </h4>
              </CardHeader>
              <CardContent class="mt-2 text-xs">
                {work.description}
              </CardContent>
            </Card>
          )
        })}
      </Section>

      <Section class="print-force-new-page scroll-mb-16">
        <h2 class="text-xl font-bold">Projects</h2>
        <div class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-1 print:gap-2 md:grid-cols-1 lg:grid-cols-1">
          {RESUME_DATA.projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            )
          })}
        </div>
      </Section>
      <Section class="print-force-new-page scroll-mb-16">
        <h2 class="text-xl font-bold">Clients</h2>
        <div class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
          {RESUME_DATA.clients.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
              />
            )
          })}
        </div>
      </Section>
      <Section>
        <h2 class="text-xl font-bold">Education</h2>
        {RESUME_DATA.education.map((education) => {
          return (
            <Card key={education.school}>
              <CardHeader>
                <div class="flex items-center justify-between gap-x-2 text-base">
                  <h3 class="font-semibold leading-none">
                    {education.school}
                  </h3>
                  <div class="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent class="mt-2">{education.degree}</CardContent>
            </Card>
          )
        })}
      </Section>
      <Section>
        <h2 class="text-xl font-bold">Skills</h2>
        <div class="flex flex-wrap gap-1">
          {RESUME_DATA.skills.map((skill) => {
            return <Badge key={skill}>{skill}</Badge>
          })}
        </div>
      </Section>
    </section>

    <CommandMenu
      links={[
        {
          url: RESUME_DATA.personalWebsiteUrl,
          title: "Personal Website",
        },
        ...RESUME_DATA.contact.social.map((socilaMediaLink) => ({
          url: socilaMediaLink.url,
          title: socilaMediaLink.name,
        })),
      ]}
    />
  </main> -->