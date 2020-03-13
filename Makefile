start:
	docker-compose -f docker-compose-dev.yml up -d --build

stop:
	docker-compose -f docker-compose-dev.yml down
