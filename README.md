# nahor

create s3 bucket
enable public access
set bucket policy to allow GetObject
enable website endpoint
aws s3 sync nahor "s3://bucket-name"

add route53 hosted zone
add route53 dns records
- ns - from domain registra

create cloudfront distribution
use certificate 
- set required cnames
- validte cert via dns
set redirect to https
set additional cnames as per cert
add default path index.html

add route53 dns records
- A (alias) to cf distribution domain
- CNAME to cf distribtion domain
