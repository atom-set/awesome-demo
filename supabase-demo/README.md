### 文档

- [Self-Hosting with Docker](https://supabase.com/docs/guides/self-hosting/docker)
- [uninstalling](https://supabase.com/docs/guides/self-hosting/docker#uninstalling)

### Running Supabase

```js
# Get the code
git clone --depth 1 https://github.com/supabase/supabase

# Go to the docker folder
cd supabase/docker

# Copy the fake env vars
cp .env.example .env

# Pull the latest images
docker compose pull

# Start the services (in detached mode)
docker compose up -d
```

After all the services have started you can see them running in the background:
```js
docker compose ps

```


### Uninstalling

```js
# Stop docker and remove volumes:
docker compose down -v

# Remove Postgres data:
rm -rf volumes/db/data/
```